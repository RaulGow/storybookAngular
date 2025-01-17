import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../button/button.component';

export interface selectedDateStart {
  day: number;
  month: number;
  year: number;
}

@Component({
  selector: 'app-date-picker-calendar-mobile',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './date-picker-calendar-mobile.component.html',
  styleUrls: ['./date-picker-calendar-mobile.component.scss'],
})
export class DatePickerCalendarMobileComponent implements OnInit {
  @Input({ required: true }) isRange!: boolean;
  @Input({ required: false }) dateRecibedToInputStart!: string;
  @Input({ required: false }) dateRecibedToInputEnd!: string;
  @Output() dateSelectedStart = new EventEmitter<string>();
  @Output() dateSelectedEnd = new EventEmitter<string>();
  @Output() calendarClosed = new EventEmitter<void>(); // Emite un evento cuando se cierra el calendario
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  day: number = 0;
  month: number = 0;
  year: number = 0;
  currentMonthStart: string = '';
  selectedDateStart: { day: number; month: number; year: number } | null = null;
  selectedDateEnd: { day: number; month: number; year: number } | null = null;

  dates: (number | null)[] = []; // Usaremos null para los días vacíos
  datesSecondMonth: (number | null)[] = []; // Usaremos null para los días vacíos
  firstDayOfMonth: number | undefined; // El día de la semana en que comienza el mes

  constructor() { }

  ngOnInit(): void {
    this.initializeDate();
    this.generateCalendar();
  }

  // Función para inicializar la fecha
  private initializeDate(): void {
    const currentDate = new Date();
    let formattedDate = '';
    if (this.dateRecibedToInputStart.length == 10) {
      formattedDate = this.dateRecibedToInputStart;
    } else {
      formattedDate = this.formatDate(currentDate);
    }

    const [dayString, monthString, yearString] = this.splitDate(formattedDate);

    this.day = parseInt(dayString, 10);
    this.month = parseInt(monthString, 10);
    this.year = parseInt(yearString, 10);

    if (this.dateRecibedToInputStart.length == 10) {
      this.selectedDateStart = {
        day: this.day,
        month: this.month,
        year: this.year,
      };
    }
  }

  // Función para formatear la fecha en 'es-ES'
  private formatDate(date: Date): string {

    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate
  }

  // Función para dividir la fecha en partes (día, mes, año)
  private splitDate(formattedDate: string): string[] {
    return formattedDate.split('/');
  }

  generateCalendar(): void {
    this.currentMonthStart = this.getMonthName(this.month);

    const dateComplete = new Date(this.year, this.month - 1, 1); // Crear un objeto Date con el mes actual

    dateComplete.setDate(1); // Ponemos la fecha al primer día del mes
    this.firstDayOfMonth = dateComplete.getDay(); // Obtener el día de la semana del primer día (0=Domingo, 1=Lunes, ..., 6=Sábado)
    const daysInMonth = new Date(this.year, this.month, 0).getDate(); // Obtener el número de días del mes

    // Rellenamos el calendario con los días
    this.dates = [];
    this.datesSecondMonth = [];
    for (let i = 0; i < this.firstDayOfMonth; i++) {
      this.dates.push(null); // Agregamos null para los espacios vacíos
    }
    for (let day = 1; day <= daysInMonth; day++) {
      this.dates.push(day); // Agregamos los días del mes
    }

  }

  selectDate(date: number | null, type: string): void {
    if (date == null) return;
    if (type == 'start') {
      this.selectedDateStart = {
        day: date,
        month: this.month,
        year: this.year,
      };
      const formattedDay = this.selectedDateStart.day < 10 ? `0${this.selectedDateStart.day}` : `${this.selectedDateStart.day}`;
      const formattedMonth = this.selectedDateStart.month < 10 ? `0${this.selectedDateStart.month}` : `${this.selectedDateStart.month}`;
      this.dateSelectedStart.emit(`${formattedDay}/${formattedMonth}/${this.selectedDateStart.year}`);
    } else {
      this.selectedDateEnd = {
        day: date,
        month: this.month,
        year: this.year,
      };
      const formattedDay = this.selectedDateEnd.day < 10 ? `0${this.selectedDateEnd.day}` : `${this.selectedDateEnd.day}`;
      const formattedMonth = this.selectedDateEnd.month < 10 ? `0${this.selectedDateEnd.month}` : `${this.selectedDateEnd.month}`;
      this.dateSelectedEnd.emit(`${formattedDay}/${formattedMonth}/${this.selectedDateEnd.year}`);
    }

  }

  goToPreviousMonth(): void {
    if (this.month === 1) {
      this.month = 12;
      this.year -= 1;
    } else {
      this.month -= 1;
    }
    this.currentMonthStart = this.getMonthName(this.month);
    this.generateCalendar();
  }

  goToNextMonth(): void {
    if (this.month === 12) {
      this.month = 1;
      this.year += 1;
    } else {
      this.month += 1;
    }
    this.currentMonthStart = this.getMonthName(this.month);
    this.generateCalendar();
  }

  getMonthName(month: number): string {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return months[month - 1];
  }

  hideCalendar(): void {
    this.calendarClosed.emit(); // Emitimos el evento para cerrar el calendario
  }

  buttonClicked(): void {
    this.hideCalendar();
  }

}
