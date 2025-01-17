import type { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';

const meta: Meta<DatePickerComponent> = {
  title: 'Componentes/DatePicker',
  component: DatePickerComponent,
  tags: ['autodocs'],
  argTypes: {
    // Input isRange: Control de tipo booleano
    isRange: {
      control: 'boolean',
      description: 'Determina si el DatePicker es para un rango de fechas',
      defaultValue: false,
    },
    // Input startDate: Control de tipo texto
    startDate: {
      control: 'text',
      description: 'Fecha de inicio en formato YYYY-MM-DD',
      defaultValue: '',
    },
    // Input endDate: Control de tipo texto
    endDate: {
      control: 'text',
      description: 'Fecha de fin en formato YYYY-MM-DD',
      defaultValue: '',
    },
    // Input startDate: Control de tipo texto
    startPlaceholder: {
      control: 'text',
      description: 'Fecha de inicio en formato YYYY-MM-DD',
      defaultValue: '',
    },
    // Input endDate: Control de tipo texto
    endPlaceholder: {
      control: 'text',
      description: 'Fecha de fin en formato YYYY-MM-DD',
      defaultValue: '',
    },
    // Input startLabel: Control de tipo texto
    startLabel: {
      control: 'text',
      description: 'Texto del label para la fecha de inicio',
      defaultValue: 'Desde',
    },
    // Input endLabel: Control de tipo texto
    endLabel: {
      control: 'text',
      description: 'Texto del label para la fecha de fin',
      defaultValue: 'Hasta',
    },
    // Input startHelperText: Control de tipo texto
    startHelperText: {
      control: 'text',
      description: 'Texto de ayuda para la fecha de inicio',
      defaultValue: 'Selecciona la fecha de inicio',
    },
    // Input endHelperText: Control de tipo texto
    endHelperText: {
      control: 'text',
      description: 'Texto de ayuda para la fecha de fin',
      defaultValue: 'Selecciona la fecha de fin',
    },
    // Input layout: Control de tipo selección entre opciones
    layout: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Define el layout del DatePicker',
      defaultValue: 'horizontal',
    },
    // Input separated: Control de tipo booleano
    separated: {
      control: 'boolean',
      description: 'Determina si los inputs están separados',
      defaultValue: false,
    },
    // Input isDisabled: Control de tipo booleano
    isDisabled: {
      control: 'boolean',
      description: 'Deshabilita el DatePicker',
      defaultValue: false,
    },
    // Input isFocus: Control de tipo booleano
    isFocus: {
      control: 'boolean',
      description: 'Define si el DatePicker debe estar enfocado',
      defaultValue: false,
    },
    // Input isReadonly: Control de tipo booleano
    isReadonly: {
      control: 'boolean',
      description: 'Coloca el DatePicker en modo solo lectura',
      defaultValue: false,
    },
    // Output dateChange: Evento emitido al cambiar las fechas
    dateChange: {
      action: 'dateChange',
      description: 'Evento emitido cuando cambia la fecha de inicio o fin',
    },
  },
};

export default meta;

type Story = StoryObj<DatePickerComponent>;

export const Default: Story = {
  args: {
    isRange: false,
    startDate: '',  // Cambiado a null o puedes usar una instancia de Date si lo deseas
    endDate: '',
    startLabel: 'Desde',
    endLabel: 'Hasta',
    startPlaceholder: '15/01/2025',
    endPlaceholder: '31/01/2025',
    startHelperText: 'Selecciona la fecha de inicio',
    endHelperText: 'Selecciona la fecha de fin',
    layout: 'horizontal',
    separated: false,
    isDisabled: false,
    isFocus: false,
    isReadonly: false,
  },
};
