import type { Meta, StoryObj } from '@storybook/angular';

import { BadgeComponent } from './badge.component';
import { Stats } from '../../../enums/stats.enum';

const templateBadge = `
  <lib-badge
    [notifications]="notifications"
    [type]="type">
  </lib-badge>
`

const meta: Meta<BadgeComponent> = {
  title: 'Componentes/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  args: {
    notifications: 1000,
    type: Stats.ERROR
  },
  argTypes: {
    notifications: {
      control: 'number',
      description: 'Numero de notificaciones',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    type: {
      control: 'select',
      options: [Stats.ERROR, Stats.INFO, Stats.WARNING, Stats.NEUTRAL, Stats.SUCCESS],
      description: 'Typo de badge',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'error' },
      },
    }

  },
};

export default meta;

export const Default: StoryObj<BadgeComponent> = {

  args: {
    type: Stats.NEUTRAL,
  },
  render: (args) => ({
    props: args,
    template: templateBadge,
  }),
};

export const Success: StoryObj<BadgeComponent> = {

  args: {
    type: Stats.SUCCESS,
  },
  render: (args) => ({
    props: args,
    template: templateBadge,
  }),
};

export const Error: StoryObj<BadgeComponent> = {

  args: {
    type: Stats.ERROR,
  },
  render: (args) => ({
    props: args,
    template: templateBadge,
  }),
};
export const Warning: StoryObj<BadgeComponent> = {

  args: {
    type: Stats.WARNING,
  },
  render: (args) => ({
    props: args,
    template: templateBadge,
  }),
};
export const Info: StoryObj<BadgeComponent> = {

  args: {
    type: Stats.INFO,
  },
  render: (args) => ({
    props: args,
    template: templateBadge,
  }),
};
