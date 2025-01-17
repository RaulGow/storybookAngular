import { Injectable } from '@angular/core';
import { Months } from '../enums/dates.enum';
import { Weekdays } from '../enums/dates.enum';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  currentDate: Date = new Date();
  currentYear: number = 0;
  currentMonth: number = 0;
  currentDay: number = 0;
  months = Object.values(Months);
  days = Object.values(Weekdays);
  daysOfMonth: number[] = [];


  constructor() {
    console.log('constructor Servicio')

  }

  public getMonthDays() {

    this.daysOfMonth = []; // Reinicia los días para evitar acumulaciones.

    // Obtén el número total de días en el mes.
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // Obtén el día de la semana del 1er día del mes (0 = domingo, 1 = lunes, ..., 6 = sábado).
    const firstDayOfWeek = new Date(this.currentYear, this.currentMonth, 1).getDay();

    // Asegúrate de que la semana comience en lunes en lugar de domingo.
    const adjustedFirstDay = (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1);

    // Añade días vacíos al principio para que el día 1 comience en el día correcto.
    for (let i = 0; i < adjustedFirstDay; i++) {
      this.daysOfMonth.push(0); // Usa `null` para representar los días vacíos.
    }

    // Añade los días reales del mes.
    for (let i = 1; i <= daysInMonth; i++) {
      this.daysOfMonth.push(i);
    }

    console.log('MES:', this.daysOfMonth)

  }

  public generateCalendar(date: string | Date) {

    if (typeof date === 'string') {
      [this.currentDay, this.currentMonth, this.currentYear] = date.split("/").map(Number);
      this.currentMonth -= 1;
      console.log(this.currentYear);
      console.log(this.currentMonth);
      console.log(this.currentDay);
    } else {
      this.currentYear = this.currentDate.getFullYear();
      this.currentMonth = this.currentDate.getMonth();
      this.currentDay = this.currentDate.getDate();
      console.log(this.currentYear);
      console.log(this.currentMonth);
      console.log(this.currentDay);
    }

    this.getMonthDays()

  }



}
