import { palette } from './palette'

export const colors = {
  text: {
    base: palette.grey[100],
    black: palette.black,
    secondary: palette.grey[500],
    //     dimmed: palette.grey[500],
    //     light: palette.grey[700],
    //     formLabel: palette.grey[800],
    //     tabs: palette.grey[600],
    //     inverted: palette.white,
    //     inactive: palette.grey[600],
    //     silent: palette.grey[850],
    //     author: palette.grey[200],
  },
  background: {
    // light: palette.grey[950],
    dimmed: palette.grey[900],
    //   dark: palette.grey[100],
    //   inactive: palette.grey[850],
    //   inactiveHover: palette.grey[650],
  },
  accent: {
    primary: palette.blue,
    primaryHover: palette.lightBlue,
    secondary: palette.grey[500],
    error: palette.darkRed,
    //   primaryHover: palette.greenDarker,
    //   destructive: palette.pink,
    //   destructiveHover: palette.pinkDarker,
  },
  border: {
    light: palette.grey[950],
  },
}
