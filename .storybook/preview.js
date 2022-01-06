import { ThemeProvider } from "styled-components";
import { theme }  from '../src/style/theme';
import  { GlobalStyle} from '../src/style/global-style';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "Light",
    values: [
      {
        name: 'Light',
        value: theme.colors.light_color
      },
      {
        name: 'DarkBlue',
        value: theme.colors.dark_color
      }
    ]
  },
  layout: 'fullscreen'
}

export const decorators = [
  (Story)=>(
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle/>
    </ThemeProvider>
  )
]