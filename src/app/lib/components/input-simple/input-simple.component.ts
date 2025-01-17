import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { InputType } from '../../../enums/input-type.enum';

@Component({
  selector: 'lib-input-simple',
  imports: [CommonModule, IconComponent],
  templateUrl: './input-simple.component.html',
  styleUrl: './input-simple.component.scss'
})
export class InputSimpleComponent implements OnChanges, OnInit{

  ngOnInit(): void {
    this.helperTextDefault = this.helperText
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && !changes['type'].firstChange) {
      const valueAsString = this.value != null ? String(this.value) : ''; // Asegura que el valor sea un string
      this.validateInputByType(valueAsString); // Pasar el valor convertido a string
    }
  }

  @Input() type!: InputType; // Tipo por defecto
  @Input() value?: string | number | null;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() placeholder?: string;
  @Input() isDisabled?: boolean;
  @Input() isFocus?: boolean;
  @Input() isReadonly?: boolean;
  @Input() isError?: boolean;
  @Input() maxLength?: number;

  helperTextDefault?: string;

  @Output() valueChange = new EventEmitter<any>();

  onInputHandler(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.valueChange.emit(input);
    this.validateInputByType(input)
  }

  onFocusHandler(event: Event): void {
    this.isFocus = true;
    // console.log('Focus Input')
  }

  onBlurHandler(event: Event): void {
    // console.log('Blur Out Input')
    this.isFocus = false;
  }

  onKeydown(event: KeyboardEvent, inputRef: HTMLInputElement): void {
    if (event.key === 'Enter') {
      inputRef.blur(); // Quita el foco del input
    } else if (event.key === 'Escape') {
      inputRef.blur(); // Quita el foco del input
    }
  }

  validateInputByType(value: string): void {
    switch (this.type) {
      case InputType.TEXT:
        this.handleTextValidation(value);
        break;
      case InputType.EMAIL:
        this.handleEmailValidation(value);
        break;
      case InputType.PASSWORD:
        this.handlePasswordValidation(value);
        break;
      default:
        console.warn(`Validation not implemented for type: ${this.type}`);
    }
  }

  private handleTextValidation(input: string): void {
    if (this.maxLength && input.length > this.maxLength) {
      this.isError = true;
      this.helperText = `Máximo de ${this.maxLength} caracteres permitido.`;
    } else {
      this.isError = false;
      this.helperText = this.helperTextDefault;
    }
  }

  private handleEmailValidation(input: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      this.isError = true;
      this.helperText = 'Introduce un correo válido.';
    } else {
      this.isError = false;
      this.helperText = this.helperTextDefault;
    }
  }

  private handlePasswordValidation(input: string): void {
    if (this.maxLength && input.length > this.maxLength) {
      this.isError = true;
      this.helperText = `Máximo de ${this.maxLength} caracteres permitido.`;
    } else {
      this.isError = false;
      this.helperText = this.helperTextDefault;
    }
  }
}
