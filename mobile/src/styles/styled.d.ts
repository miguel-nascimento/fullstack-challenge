import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      background: string;
      text: string;
      title: string;
      input: string;
      inputText: string;
      formText: string;
    };
  }
}
