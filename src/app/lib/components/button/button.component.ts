import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({required: true}) label?: string;
  @Input({required: false}) tabIndex: number = 0;
  @Input({required: true}) type: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'primary';
  @Input({required: false}) isDisabled = false;
  @Input({required: false}) expanded = false;

  @Output() buttonClicked = new EventEmitter<boolean>();

  handleClick(): void {
    this.buttonClicked.emit(true);
  }

  // Maneja las teclas presionadas
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      console.log('Botón activado con teclado');
      this.handleClick();
    }
  }
}
