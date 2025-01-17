import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../icon/icon.component';

@Component({
  selector: 'app-date-picker-input',
  imports: [CommonModule, IconComponent],
  templateUrl: './date-picker-input.component.html',
  styleUrls: ['./date-picker-input.component.scss'],
})
export class DatePickerInputComponent implements OnChanges{
  @Input() value: string | null = null;
  @Input() label: string = '';
  @Input() helperText: string = '';
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() isFocus: boolean = false;
  @Input() isReadonly: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  ngOnChanges(): void {
    if (this.value && !this.isValidDate(this.value)) {
      //console.error(`Invalid date format: ${this.value}. Expected format: DD/MM/YYYY`);
    }
  }

  isValidDate(value: string): boolean {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    return dateRegex.test(value);
  }

  onInputClick(): void {
    const event = new CustomEvent('click');
    dispatchEvent(event);
    this.clicked.emit();
  }

  onInput(event: Event): void {
    // console.log('texto añadido')
  }

  onFocusHandler(event: Event): void {
    this.isFocus = true;
    // console.log('Focus Input')
  }

  onBlurHandler(event: Event): void {
    // console.log('Blur Out Input')
    this.isFocus = false;
  }

  onKeypress(event: Event): void {
    // console.log('onKeypress')
  }

  clickIconCalendar(inputElement: HTMLInputElement): void {
    if (!this.isDisabled) {
      inputElement.focus(); // Enfoca el input cuando se hace clic en el icono
    }
  }

}
