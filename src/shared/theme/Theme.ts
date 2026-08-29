import { createColorScale, pxToRem } from "../utils/styles-utils";

const PALETTE = {
  primary: "#4CAF50",
  secondary: "#8BC34A",
  backgroundPrimary: "#1E232B",
  backgroundSecondary: "#2A3038",
  surface: "#F2F4F7",
  steel: "#8B929A",
  textPrimary: "#171B1F",
  textSecondary: "#66706B",
  textLight: "#F7F9F8",
  border: "#D8DEDB",
  white: "#FFFFFF",
  success: "#2F8A4B",
  warning: "#D49A32",
  error: "#C94A4A",
} as const;

export const createTheme = (
  primaryColor: string = PALETTE.primary,
  secondaryColor: string = PALETTE.secondary,
) => {
  return {
    color: {
      palette: PALETTE,

      brand: {
        primary: primaryColor,
        secondary: secondaryColor,
      },

      primary: createColorScale(primaryColor),
      secondary: createColorScale(secondaryColor),

      white: PALETTE.white,
      steel: PALETTE.steel,
      surface: PALETTE.surface,

      neutral: {
        50: PALETTE.surface,
        100: PALETTE.border,
        200: PALETTE.steel,
        300: PALETTE.steel,
        400: `color-mix(in srgb, ${PALETTE.steel} 70%, ${PALETTE.backgroundSecondary})`,
        500: PALETTE.backgroundSecondary,
        600: PALETTE.backgroundSecondary,
        700: PALETTE.backgroundPrimary,
        800: PALETTE.backgroundPrimary,
        900: PALETTE.textPrimary,
      },

      button: {
        primary: {
          default: primaryColor,
          hover: `color-mix(in srgb, ${primaryColor} 85%, ${PALETTE.white})`,
          pressed: `color-mix(in srgb, ${primaryColor} 72%, black)`,
          disabled: `color-mix(in srgb, ${primaryColor} 45%, ${PALETTE.backgroundPrimary})`,
          loading: primaryColor,
        },
        secondary: {
          default: secondaryColor,
          hover: `color-mix(in srgb, ${secondaryColor} 85%, ${PALETTE.white})`,
          pressed: `color-mix(in srgb, ${secondaryColor} 72%, black)`,
          disabled: `color-mix(in srgb, ${secondaryColor} 45%, ${PALETTE.backgroundPrimary})`,
          loading: secondaryColor,
        },
      },

      danger: {
        default: PALETTE.error,
        hover: `color-mix(in srgb, ${PALETTE.error} 85%, ${PALETTE.white})`,
        pressed: `color-mix(in srgb, ${PALETTE.error} 72%, black)`,
        disabled: `color-mix(in srgb, ${PALETTE.error} 45%, ${PALETTE.backgroundPrimary})`,
        loading: PALETTE.error,
        highlight: `color-mix(in srgb, ${PALETTE.error} 75%, ${PALETTE.white})`,
        soft: {
          text: `color-mix(in srgb, ${PALETTE.error} 70%, black)`,
          background: `color-mix(in srgb, ${PALETTE.error} 18%, ${PALETTE.white})`,
          border: `color-mix(in srgb, ${PALETTE.error} 70%, ${PALETTE.white})`,
        },
      },

      success: {
        default: PALETTE.success,
        hover: `color-mix(in srgb, ${PALETTE.success} 85%, ${PALETTE.white})`,
        pressed: `color-mix(in srgb, ${PALETTE.success} 72%, black)`,
        disabled: `color-mix(in srgb, ${PALETTE.success} 45%, ${PALETTE.backgroundPrimary})`,
        loading: PALETTE.success,
        soft: {
          text: `color-mix(in srgb, ${PALETTE.success} 70%, black)`,
          background: `color-mix(in srgb, ${PALETTE.success} 18%, ${PALETTE.white})`,
          border: `color-mix(in srgb, ${PALETTE.success} 70%, ${PALETTE.white})`,
        },
      },

      warning: {
        default: PALETTE.warning,
        hover: `color-mix(in srgb, ${PALETTE.warning} 85%, ${PALETTE.white})`,
        pressed: `color-mix(in srgb, ${PALETTE.warning} 72%, black)`,
        disabled: `color-mix(in srgb, ${PALETTE.warning} 45%, ${PALETTE.backgroundPrimary})`,
        loading: PALETTE.warning,
        soft: {
          text: `color-mix(in srgb, ${PALETTE.warning} 70%, black)`,
          background: `color-mix(in srgb, ${PALETTE.warning} 18%, ${PALETTE.white})`,
          border: `color-mix(in srgb, ${PALETTE.warning} 70%, ${PALETTE.white})`,
        },
      },

      info: {
        soft: {
          text: PALETTE.textPrimary,
          background: PALETTE.surface,
          border: PALETTE.steel,
        },
      },

      text: {
        primary: PALETTE.textPrimary,
        secondary: PALETTE.textSecondary,
        light: PALETTE.textLight,
        tertiary: primaryColor,
        placeholder: PALETTE.steel,
      },

      background: {
        primary: PALETTE.backgroundPrimary,
        secondary: PALETTE.backgroundSecondary,
        tertiary: primaryColor,
        quaternary: PALETTE.steel,
        surface: PALETTE.surface,
        sheet: PALETTE.surface,
        sheetMuted: `color-mix(in srgb, ${PALETTE.surface} 95%, transparent)`,
      },

      overlay: `color-mix(in srgb, ${PALETTE.backgroundPrimary} 72%, black)`,

      border: {
        primary: PALETTE.border,
        soft: `color-mix(in srgb, ${PALETTE.textLight} 10%, transparent)`,
        field: PALETTE.border,
      },
    },

    typography: {
      fontFamily: {
        primary: '"Archivo", sans-serif',
        secondary: '"Archivo", sans-serif',
      },

      fontSizes: {
        small: pxToRem(12),
        normal: pxToRem(14),
        large: pxToRem(16),
        xLarge: pxToRem(18),
        pointDesktop: pxToRem(20),
        pointDesktopMini: pxToRem(22),
        xxLarge: pxToRem(24),
        xxxLarge: pxToRem(28),
        heading: pxToRem(32),
        mHeading: pxToRem(36),
        xHeading: pxToRem(40),
        xxHeading: pxToRem(48),
      },

      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        xBold: 800,
        extraBold: 900,
      },
    },

    breakpoints: {
      mobile: "579px",
      tablet: "767px",
      desktopMini: "902px",
      smallDesktop: "1023px",
      mediumDesktop: "1279px",
      desktop: "1365px",
      largeDesktop: "1439px",
      wide: "1920px",
    },

    shadows: {
      small: "0 1px 3px rgba(0, 0, 0, 0.12)",
      medium: "0 4px 6px rgba(0, 0, 0, 0.16)",
      large: "0 10px 20px rgba(0, 0, 0, 0.19)",
      xLarge: "0 8px 30px rgba(0,0,0,.15)",
      sheet: "0 -20px 50px 0 rgba(0, 0, 0, 0.50)",
    },

    radii: {
      none: "0px",
      small: pxToRem(4),
      medium: pxToRem(8),
      large: pxToRem(12),
      xLarge: pxToRem(16),
      xxLarge: pxToRem(40),
      pill: "999px",
      circle: "50%",
    },

    zIndex: {
      base: 0,
      header: 100,
      floating: 150,
      dropdown: 200,
      overlay: 300,
      modal: 400,
      tooltip: 500,
      toast: 600,
    },

    transitions: {
      fast: "0.15s ease-in-out",
      normal: "0.25s ease-in-out",
      slow: "0.4s ease-in-out",
    },

    spacing: (factor: number) => `${factor * 8}px`,
  };
};

export const theme = createTheme();
