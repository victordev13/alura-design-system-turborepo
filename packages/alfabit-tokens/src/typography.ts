const DEFAULT_FONT_FAMILY = 'Mulish'

export const typography = {
  headline: {
    h1: {
      fontSize: '56px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '62px',
    },
    h2: {
      fontSize: '48px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '56px',
    },
    h3: {
      fontSize: '40px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '48px',
    },
    subtitle1: {
      fontSize: '32px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '40px',
    },
    subtitle2: {
      fontSize: '24px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '30px',
    },
  },
  text: {
    largeBold: {
      fontSize: '18px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '700',
      lineHeight: '24px',
    },
    large: {
      fontSize: '18px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '400',
      lineHeight: '24px',
    },
    mediumBold: {
      fontSize: '16px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '700',
      lineHeight: '20px',
    },
    medium: {
      fontSize: '16px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '400',
      lineHeight: '20px',
    },
    smallBold: {
      fontSize: '14px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '700',
      lineHeight: '18px',
    },
    small: {
      fontSize: '14px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '400',
      lineHeight: '18px',
    },
    extraSmallBold: {
      fontSize: '12px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '700',
      lineHeight: '16px',
    },
    extraSmall: {
      fontSize: '12px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '400',
      lineHeight: '16px',
    },
  },
  link: {
    buttonLarge: {
      fontSize: '18px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '24px',
      letterSpacing: '0.36px',
    },
    buttonMedium: {
      fontSize: '16px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '24px',
      letterSpacing: '0.32px',
    },
    buttonSmall: {
      fontSize: '14px',
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: '800',
      lineHeight: '16px',
      letterSpacing: '0.28px',
    },
  },
} as const
