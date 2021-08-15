import { ThemeProvider } from '@material-ui/core';
import { BaseTheme } from '../src/themes';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  Story => (
    <ThemeProvider theme={BaseTheme}>
      <Story />
    </ThemeProvider>
  )
];
