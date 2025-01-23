import type { Meta, StoryObj } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';

const meta: Meta<CalendarComponent> = {
  title: 'Componentes/Calendar',
  component: CalendarComponent,
  tags: ['autodocs'],
  args: {
    initDate: '17/01/2025',
    isRange: false,
  },
  argTypes: {
    isRange: {
      control: 'boolean',
      description: 'Indicar si controlamos rango fecha simple',
      defaultValue: false,
    },
    initDate: {
      control: 'text',
      description: 'Fecha de inicio en formato DD/MM/YYYY',
      defaultValue: '',
    },
    daySeleted: {
      action: 'clickedDay',
      description: 'Click Button',
    },
  },
};

export default meta;

export const Default: StoryObj<CalendarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <lib-calendar
        [initDate]="initDate"
        [isRange]="isRange"
        (daySeleted)="daySeleted($event)">
      </lib-calendar>
    `,
  }),
};
