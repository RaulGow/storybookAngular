import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { CalendarService } from '../../../services/calendar.service';
import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'lib-calendar',
  imports: [CommonModule, TruncatePipe, IconComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit, OnChanges{
  @Input() initDate?: string;
  weekDays: string[] = [];
  monthDays: number[] = [];
  currentMonth: string = '';
  selectedDay?: number;



  constructor( private calendarService: CalendarService) {
    console.log('constructor Component')

    this.weekDays = calendarService.days // añado los dias de lunesa a domingo

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateCalendar();
  }
  ngOnInit(): void {

    console.log('Init Component')
    this.updateCalendar();

  }

  updateCalendar(): void {
    const date = this.initDate || new Date()
    this.calendarService.generateCalendar(date)
    this.currentMonth = this.calendarService.months[this.calendarService.currentMonth]; //obtengo el literal del mes de la fecha
    this.monthDays = this.calendarService.daysOfMonth; // añado los dias de lunesa a domingo
    this.selectedDay = this.calendarService.currentDay;
    console.log('Tengo el', this.selectedDay)
  }

  selectDay(day: number) {
    this.calendarService.currentDay = day;
    this.selectedDay = this.calendarService.currentDay;
  }

}
