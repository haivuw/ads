import {ThemeProvider} from '@material-ui/core'
import {BaseTheme} from '../src/themes'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={BaseTheme}>
      <Story />
    </ThemeProvider>
  ),
];