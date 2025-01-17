import type { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from './link.component';

const templateComponent = `
<lib-link
  [text]="text"
  [iconType]="iconType"
  [iconLeft]="iconLeft"
  [iconRight]="iconRight"
  [silent]="silent"
  [alternative]="alternative">
</lib-link>
`

const meta: Meta<LinkComponent> = {
  title: 'Componentes/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  args: {
    text: 'Ver más',
    iconType: 'left',
    iconLeft: 'arrow-down-circle-line',
    iconRight: 'arrow-right-s-line',
    silent: false,
    alternative: false
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Texto del link',
      defaultValue: 'Ver más',
    },
    iconType: {
      control: { type: 'select' },
      options: ['left', 'right', 'both', 'any'],
      description: 'Texto del link',
      defaultValue: 'Ver más',
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'Icono izquierdo',
      defaultValue: 'arrow-down-circle-line',
    },
    iconRight: {
      control: { type: 'text' },
      description: 'Icono derecho',
      defaultValue: 'arrow-right-s-line',
    },
    silent: {
      control: { type: 'boolean' },
      description: 'Si mostrar underline del link',
      defaultValue: false,
    },
    alternative: {
      control: { type: 'boolean' },
      description: 'Si mostrar underline del link',
      defaultValue: false,
    },
    linkClicked: {
      action: 'clickedLink',
      description: 'Click Link',
    },
  },
};

export default meta;
type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  render: (args) => {
    return {
      template: templateComponent,
      props: { ...args }
    }
  }
};

export const Silent: StoryObj<LinkComponent> = {
  render: (args) => {
    return {
      template: `
        <lib-link
          [text]="'${args.text}'"
          [iconType]="'${args.iconType}'"
          [iconLeft]="'${args.iconLeft}'"
          [iconRight]="'${args.iconRight}'"
          [silent]="${args.silent}"
          [alternative]="${args.alternative}">
        </lib-link>
      `,
    }
  },
  args: {
    silent: true,
    alternative: false,
  },
  argTypes: {
    silent: { table: { disable: true } },
  },
}

export const Alternative: StoryObj<LinkComponent> = {
  render: (args) => {
    return {
      template: `
        <div style="background-color: black; color: white; padding: 16px; border-radius:8px;">
          <lib-link
            [text]="'${args.text}'"
            [iconType]="'${args.iconType}'"
            [iconLeft]="'${args.iconLeft}'"
            [iconRight]="'${args.iconRight}'"
            [silent]="${args.silent}"
            [alternative]="${args.alternative}">
          </lib-link>
        </div>
      `,
      props: { ...args },
    };
  },
  args: {
    silent: false,
    alternative: true,
  },
  argTypes: {
    alternative: { table: { disable: true } },
  },
};
