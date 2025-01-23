import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const templateAvatar = `
  <lib-avatar
    [type]="type">
  </lib-avatar>
`

const meta: Meta<AvatarComponent> = {
  title: 'Componentes/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  args: {
    type: 'image'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'image'],
      description: 'Tipo de avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'image' },
      },
    }
  },
};

export default meta;

export const Default: StoryObj<AvatarComponent> = {

  render: (args) => ({
    props: args,
    template: templateAvatar,
  }),
};
