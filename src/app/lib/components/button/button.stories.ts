import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Componentes/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Texto mostrado en el botón',
      defaultValue: 'Aceptar',
    },
    type: {
      description: 'Define el tipo de botón',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'Orden de tabulación del botón',
      defaultValue: 0,
    },
    buttonClicked: {
      action: 'clickedButton',
      description: 'Click Button',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Texto mostrado en el botón',
      defaultValue: false,
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Si queremos un 100% de ancho',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {

  args: {
    label: 'Hola',
    tabIndex: 0,
    isDisabled: false,
    expanded: false,
  },
};

export const Secondary: Story = {

  args: {
    type: 'secondary',
    label: 'Hola',
    tabIndex: 0,
    isDisabled: false,
    expanded: false,
  },
};

export const Tertiary: Story = {

  args: {
    type: 'tertiary',
    label: 'Hola',
    tabIndex: 0,
    isDisabled: false,
    expanded: false,
  },
};

export const Ghost: Story = {

  args: {
    type: 'ghost',
    label: 'Hola',
    tabIndex: 0,
    isDisabled: false,
    expanded: false,
  },
};
