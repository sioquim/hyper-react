import { createMuiTheme } from '@material-ui/core/styles'

import { pink, blue } from '@material-ui/core/colors'

const fontFamily = "'Karla', sans-serif"

const fontWeightBold = 700
const fontWeightMedium = 500
const fontWeightRegular = 400

const spacingUnit = 8
export const spacing = {
  unit: spacingUnit,
  xxl: spacingUnit * 10, // 80
  xl: spacingUnit * 6, // 48
  lg: spacingUnit * 4, // 32
  md: spacingUnit * 2, // 16
  sm: spacingUnit, // 8
  xs: spacingUnit / 2, // 4
}

export const palette = {
  primary: blue,
  secondary: pink,
}

const transition =
  '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'

const theme = createMuiTheme({
  palette,
  spacing,
  typography: {
    useNextVariants: true,
  },
  weights: {
    fontWeightBold,
    fontWeightMedium,
    fontWeightRegular,
  },
  status: {
    danger: 'orange',
  },
  props: {
    MuiWithWidth: {
      initialWidth: 'xs',
    },
  },
  transition,
})

// We can only use typography function such as pxToRem after the createMuiTheme
theme.typography = {
  ...theme.typography,
  fontFamily,
  fontFamilySecondary: fontFamily,
  h1: {
    ...theme.typography.h1,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(40),
    lineHeight: theme.typography.pxToRem(54),
  },
  h2: {
    ...theme.typography.h2,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(32),
    lineHeight: theme.typography.pxToRem(43),
  },
  h3: {
    ...theme.typography.h3,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(32),
  },
  h4: {
    ...theme.typography.h4,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    lineHeight: theme.typography.pxToRem(24),
  },
  h5: {
    ...theme.typography.h5,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  h6: {
    ...theme.typography.h6,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
  },
  subtitle1: {
    ...theme.typography.subtitle1,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
  },
  body1: {
    ...theme.typography.body1,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  body2: {
    ...theme.typography.body2,
  },
  button: {
    ...theme.typography.button,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  caption: {
    ...theme.typography.caption,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(11),
    lineHeight: theme.typography.pxToRem(16),
  },
  overline: {
    ...theme.typography.overline,
  },
}

theme.overrides = {
  // add theme overrides here
}

export default theme
