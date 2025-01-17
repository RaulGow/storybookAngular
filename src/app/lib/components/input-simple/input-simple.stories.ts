import type { Meta, StoryObj } from '@storybook/angular';
import { InputSimpleComponent } from './input-simple.component';
import { InputType } from '../../../enums/input-type.enum';

const meta: Meta<InputSimpleComponent> = {
  title: 'Componentes/Input Simple',
  component: InputSimpleComponent,
  tags: ['autodocs'],
  args: {
    type: InputType.TEXT,
    value: '',
    label: 'Label',
    helperText: 'Texto de ayuda',
    placeholder: 'Escribe aquí...',
    isDisabled: false,
    isFocus: false,
    isReadonly: false,
    isError: false,
    maxLength: 10,
  },
  argTypes: {
    type: {
      control: 'select', // Tipo de control
      options: Object.values(InputType), // Valores del enum
      description: 'Tipo de input (text, number, email, etc.)',
      table: {
        type: { summary: 'InputType' },
        defaultValue: { summary: InputType.TEXT },
      },
    },
    value: {
      control: 'text',
      description: 'Valor actual del campo de entrada.',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
      },
    },
    label: {
      control: 'text',
      description: 'Etiqueta que aparece arriba del campo.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda que aparece debajo del campo.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto que se muestra cuando el campo está vacío.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Define si el campo está deshabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isFocus: {
      control: 'boolean',
      description: 'Define si el campo tiene el foco actualmente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isReadonly: {
      control: 'boolean',
      description: 'Define si el campo es de solo lectura.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isError: {
      control: 'boolean',
      description: 'Define si el campo muestra un estado de error.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Numero maximo de caracteres',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<InputSimpleComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <lib-input-simple
        [value]="value"
        [type]="type"
        [label]="label"
        [helperText]="helperText"
        [placeholder]="placeholder"
        [isDisabled]="isDisabled"
        [isFocus]="isFocus"
        [isReadonly]="isReadonly"
        [isError]="isError"
        [maxLength]="maxLength">
      </lib-input-simple>
    `,
  }),
};
