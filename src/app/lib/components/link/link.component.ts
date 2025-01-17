import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

export type iconShowType = 'left' | 'right' | 'both' | 'any';

@Component({
  selector: 'lib-link',
  imports: [IconComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  selectIconsToShow = signal<iconShowType>('left');
  @Input({required: true}) text!: string;
  @Input({required: false}) iconLeft?: string;
  @Input({required: false}) iconRight?: string;
  @Input({required: false}) silent?: boolean;
  @Input({required: false}) alternative?: boolean;
  @Input() set iconType(value: iconShowType) {
    this.selectIconsToShow.set(value);
  }
  @Output() linkClicked = new EventEmitter<boolean>();

  handleClick(): void {
    this.linkClicked.emit(true);
  }

}
