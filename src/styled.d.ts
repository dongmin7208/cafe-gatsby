import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    // red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
    bgPhoto: string;
    // background: {
    //   dark: string;
    //   light: string;
    // };
    // text: {
    //   dark: string;
    //   light: string;
    // };
    // theme: {
    //   bgColor: string;
    //   textColor: string;
    // };
  }
}
