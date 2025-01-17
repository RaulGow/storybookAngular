import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerInputComponent } from './components/date-picker-input/date-picker-input.component';
import { DatePickerCalendarMobileComponent } from './components/date-picker-calendar-mobile/date-picker-calendar-mobile.component';

@Component({
  selector: 'lib-date-picker',
  imports: [CommonModule, DatePickerInputComponent, DatePickerCalendarMobileComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Cambios', changes)
  }

  @Input({ required: true }) isRange: boolean = false;
  @Input({ required: true }) startDate: string = ''; // Cambiado de string a Date
  @Input({ required: false }) endDate: string = ''; // Cambiado de string a Date
  @Input({ required: true }) startLabel: string = '';
  @Input({ required: false }) endLabel: string = ''
  @Input({ required: true }) startPlaceholder: string = ''
  @Input({ required: false }) endPlaceholder: string = ''
  @Input({ required: true }) startHelperText: string = ''
  @Input({ required: false }) endHelperText: string = ''
  @Input({ required: true }) layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input({ required: true }) separated: boolean = false;
  @Input({ required: true }) isDisabled: boolean = false;
  @Input({ required: true }) isFocus: boolean = false;
  @Input({ required: true }) isReadonly: boolean = false;
  @Output() dateChange = new EventEmitter<{ start: Date | null; end: Date | null }>();

  isCalendarMobileVisible: boolean = false;
  currentInput: 'start' | 'end' | null = null;
  isMobile: boolean = false;

  // Muestra el calendario asociado al input actual
  showCalendar(input: 'start' | 'end'): void {
    this.currentInput = input;
    this.checkIfMobile();
    if (this.isMobile == true) {
      this.isCalendarMobileVisible = true;
    }
  }

  hideCalendar() {
    if (this.isMobile == true) {
      this.isCalendarMobileVisible = false;
    }
  }

  // Comprobación si el tamaño es móvil
  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  onDateSelectedStart(date: string): void {
    console.log('Fecha recibida Start:', date);
    this.startDate = date
    // Puedes manipular la fecha recibida, por ejemplo, actualizar un campo de fecha en el componente padre.
  }

  onDateSelectedEnd(date: string): void {
    console.log('Fecha recibida End:', date);
    this.endDate = date
    // Puedes manipular la fecha recibida, por ejemplo, actualizar un campo de fecha en el componente padre.
  }
}
