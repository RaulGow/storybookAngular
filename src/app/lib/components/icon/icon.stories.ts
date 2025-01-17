import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

const meta: Meta<IconComponent> = {
  title: 'Componentes/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: { type: 'text' },
      description: 'Nombre del icono',
      defaultValue: 'arrow-right-s-line',
    },
    fillColor: {
      control: { type: 'color' },
      description: 'Color del icono',
      defaultValue: '#000000',
    },
    size: {
      control: { type: 'number' },
      description: 'Tamao en px del icono',
      defaultValue: 16,
    },
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [HttpClient]
    })
  ]
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {

  args: {
    iconName: 'arrow-right-s-line',
    fillColor: '#000000',
    size: 16,
  },
};

