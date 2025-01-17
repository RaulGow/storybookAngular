import { applicationConfig, moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from "@angular/core";

setCompodocJson(docJson);

// Configuración de dispositivos personalizados
const customViewports = {
  iphone14: {
    name: 'iPhone 14',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile',
  },
  iphone14Plus: {
    name: 'iPhone 14 Plus',
    styles: {
      width: '428px',
      height: '926px',
    },
    type: 'mobile',
  },
  iphone14Pro: {
    name: 'iPhone 14 Pro',
    styles: {
      width: '393px',
      height: '852px',
    },
    type: 'mobile',
  },
  iphone14ProMax: {
    name: 'iPhone 14 Pro Max',
    styles: {
      width: '430px',
      height: '932px',
    },
    type: 'mobile',
  },
  galaxyS25: {
    name: 'Galaxy S25',
    styles: {
      width: '360px',
      height: '800px',
    },
    type: 'mobile',
  },
  galaxyS25Plus: {
    name: 'Galaxy S25 Plus',
    styles: {
      width: '412px',
      height: '915px',
    },
    type: 'mobile',
  },
  galaxyS25Ultra: {
    name: 'Galaxy S25 Ultra',
    styles: {
      width: '440px',
      height: '960px',
    },
    type: 'mobile',
  },
  ipadPro129: {
    name: 'iPad Pro 12.9"',
    styles: {
      width: '1024px',
      height: '1366px',
    },
    type: 'tablet',
  },
  ipadPro11: {
    name: 'iPad Pro 11"',
    styles: {
      width: '834px',
      height: '1194px',
    },
    type: 'tablet',
  },
};

const decorators = [
  applicationConfig({
    providers: [provideHttpClient()]
  })
];

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports, // Añade los dispositivos personalizados
      //defaultViewport: 'iphone12',
    },
  },
  decorators: decorators
};


export default preview;
