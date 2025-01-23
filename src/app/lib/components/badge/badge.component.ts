import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Stats } from '../../../enums/stats.enum';

@Component({
  selector: 'lib-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {

  @Input() notifications: number = 0;
  @Input() type!: Stats;

  getBadgeClass(): string {
    switch (this.type) {
      case 'success':
        return 'lib-badge--success';
      case 'error':
        return 'lib-badge--error';
      case 'warning':
        return 'lib-badge--warning';
      case 'info':
        return 'lib-badge--info';
      case 'neutral':
        return 'lib-badge--neutral';
      default:
        return 'lib-badge--default';
    }
  }

}
