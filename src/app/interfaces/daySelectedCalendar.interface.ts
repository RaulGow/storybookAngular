export interface DaySelected {
  day: number;
  month: number;
  year: number;
}

export interface DaySelectedStart {
  day: number;
  month: number;
  year: number;
}

export interface DaySelectedEnd {
  day: number;
  month: number;
  year: number;
}

export interface RangeSelected {
  dateStart: {
    day: number;
    month: number;
    year: number;
  },
  dateEnd: {
    day: number;
    month: number;
    year: number;
  }
}
