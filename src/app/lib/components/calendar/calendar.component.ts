import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { CalendarService } from '../../../services/calendar.service';
import { IconComponent } from '../icon/icon.component';
import { DaySelected, DaySelectedEnd, DaySelectedStart, RangeSelected } from '../../../interfaces/daySelectedCalendar.interface';


@Component({
  selector: 'lib-calendar',
  imports: [CommonModule, TruncatePipe, IconComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() initDate?: string;
  @Input() isRange?: boolean = false;
  @Output() daySeleted: EventEmitter<DaySelected> = new EventEmitter<DaySelected>();
  @Output() rangeSeleted: EventEmitter<RangeSelected> = new EventEmitter<RangeSelected>();
  weekDays: string[] = [];
  monthDays: number[] = [];
  currentMonth: string = '';
  selectedOneDay?: number;
  currentYear: number = 0;
  selectDayStart?: DaySelectedStart;
  selectDayEnd?: DaySelectedEnd;
  isSelectingStart: boolean = true; // Variable para determinar si se está seleccionando el inicio o el fin

  constructor(private calendarService: CalendarService) {
    console.log('constructor Component')

    this.weekDays = calendarService.days // añado los dias de lunesa a domingo

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateCalendar();
  }
  ngOnInit(): void {

    console.log('Init Component')
    this.updateCalendar();
    this.currentYear = this.calendarService.currentYear;

  }

  updateCalendar(): void {
    const date = this.initDate || new Date()
    this.calendarService.generateCalendar(date)
    this.updateData();
  }

  selectDay(day: number) {
    const selectedDay = {
      day,
      month: this.calendarService.currentMonth,
      year: this.calendarService.currentYear,
    };

    if (this.isRange) {
      if (this.isSelectingStart) {
        // Seleccionar el inicio del rango
        this.selectDayStart = selectedDay;

        // Si el inicio es posterior al fin, reinicia el fin
        if (this.selectDayEnd &&
          (selectedDay.year > this.selectDayEnd.year ||
            (selectedDay.year === this.selectDayEnd.year && selectedDay.month > this.selectDayEnd.month) ||
            (selectedDay.year === this.selectDayEnd.year && selectedDay.month === this.selectDayEnd.month && selectedDay.day > this.selectDayEnd.day))) {
          this.selectDayEnd = undefined;
          console.log('Fin del rango reiniciado porque el inicio es posterior al fin.');
        }
      } else {
        // Seleccionar el fin del rango
        this.selectDayEnd = selectedDay;

        // Si el fin es anterior al inicio, reinicia el inicio
        if (this.selectDayStart &&
          (selectedDay.year < this.selectDayStart.year ||
            (selectedDay.year === this.selectDayStart.year && selectedDay.month < this.selectDayStart.month) ||
            (selectedDay.year === this.selectDayStart.year && selectedDay.month === this.selectDayStart.month && selectedDay.day < this.selectDayStart.day))) {
          this.selectDayStart = undefined;
          console.log('Inicio del rango reiniciado porque el fin es anterior al inicio.');
        }

        // Emitir el rango si ambos extremos están definidos
        if (this.selectDayStart && this.selectDayEnd) {
          this.rangeSeleted.emit({
            dateStart: this.selectDayStart,
            dateEnd: this.selectDayEnd,
          });
        }
      }
    } else {
      // Selección de un solo día
      this.calendarService.currentDay = day;
      this.selectedOneDay = this.calendarService.currentDay;
      this.daySeleted.emit({
        day: day,
        month: this.calendarService.currentMonth,
        year: this.calendarService.currentYear,
      });
    }
  }

  nextMonth() {
    this.calendarService.nextMonth();
    this.calendarService.currentDay = 0;
    this.updateData();
  }

  previousMonth() {
    this.calendarService.previousMonth();
    this.calendarService.currentDay = 0;
    this.updateData();

  }

  updateData() {
    this.currentMonth = this.calendarService.months[this.calendarService.currentMonth]; //obtengo el literal del mes de la fecha
    this.monthDays = this.calendarService.daysOfMonth; // añado los dias de lunesa a domingo
    this.selectedOneDay = this.calendarService.currentDay;
    this.currentYear = this.calendarService.currentYear;
  }

  isDayInRange(day: number): boolean {
    if (!this.selectDayStart || !this.selectDayEnd) {
      return false;
    }

    const startDate = new Date(this.selectDayStart.year, this.selectDayStart.month, this.selectDayStart.day);
    const endDate = new Date(this.selectDayEnd.year, this.selectDayEnd.month, this.selectDayEnd.day);
    const currentDate = new Date(this.calendarService.currentYear, this.calendarService.currentMonth, day);

    return currentDate >= startDate && currentDate <= endDate;
  }

}
