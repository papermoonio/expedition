import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Brand Colors
const brandColors = {
  polkadotPink: "#FF2670",
  black: "#000000",
  white: "#FFFFFF",
  lime: "#E4FF07",
  cyan: "#07FFFF",
  violet: "#7916F3",
  storm200: "#DCE2E9",
  storm400: "#AEB7CB",
  storm700: "#6E7391",
};

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    props: {
      MuiAppBar: {
        position: "sticky",
      },
      MuiCard: {
        elevation: 0,
      },
    },
    palette: {
      type: "dark",
      primary: {
        light: brandColors.cyan,
        main: brandColors.polkadotPink,
        dark: brandColors.violet,
        contrastText: brandColors.white,
      },
      secondary: {
        light: brandColors.lime,
        main: brandColors.cyan,
        dark: brandColors.storm700,
        contrastText: brandColors.black,
      },
      background: {
        default: brandColors.black,
        paper: brandColors.storm700,
      },
      divider: brandColors.polkadotPink,
      text: {
        primary: brandColors.white,
        secondary: brandColors.storm200,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            paddingTop: "64px", // Add padding to account for AppBar height
          },
          // Ensure main content doesn't overlap with sticky AppBar
          "main, .main-content, .content": {
            marginTop: "16px",
          },
        },
      },
      MuiAppBar: {
        root: {
          backgroundColor: brandColors.polkadotPink,
          color: brandColors.white,
          zIndex: 1300, // Ensure AppBar stays above other components
          position: "sticky",
        },
      },
      MuiTextField: {
        root: {
          "& .MuiInputBase-root": {
            color: brandColors.white,
          },
          "& .MuiInputLabel-root": {
            color: brandColors.storm400,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: brandColors.storm400,
            },
            "&:hover fieldset": {
              borderColor: brandColors.white,
            },
            "&.Mui-focused fieldset": {
              borderColor: brandColors.polkadotPink,
            },
          },
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: brandColors.storm700,
          color: brandColors.white,
          position: "relative",
          zIndex: 1, // Ensure Paper components stay below AppBar
          borderLeft: `4px solid ${brandColors.polkadotPink}`, // Pink accent border
        },
      },
      MuiTable: {
        root: {
          "& .MuiTableCell-root": {
            color: brandColors.white,
            borderBottomColor: brandColors.polkadotPink,
          },
          "& .MuiTableHead-root .MuiTableCell-root": {
            backgroundColor: brandColors.polkadotPink,
            color: brandColors.white,
            fontWeight: 600,
          },
          "& .MuiTableRow-root:hover": {
            backgroundColor: `${brandColors.polkadotPink}11`, // Light pink background on hover
          },
        },
      },
      MuiMenuItem: {
        root: {
          color: brandColors.white,
          "&:hover": {
            backgroundColor: brandColors.polkadotPink,
            color: brandColors.white,
          },
          "&.Mui-selected": {
            backgroundColor: `${brandColors.polkadotPink}33`,
            "&:hover": {
              backgroundColor: brandColors.polkadotPink,
            },
          },
        },
      },
      MuiLink: {
        root: {
          color: brandColors.polkadotPink,
          "&:hover": {
            color: brandColors.white,
          },
        },
      },
      MuiButton: {
        root: {
          "&.MuiButton-containedPrimary": {
            backgroundColor: brandColors.polkadotPink,
            color: brandColors.white,
            "&:hover": {
              backgroundColor: brandColors.violet,
            },
          },
          "&.MuiButton-outlined": {
            borderColor: brandColors.polkadotPink,
            color: brandColors.polkadotPink,
            "&:hover": {
              borderColor: brandColors.white,
              backgroundColor: "rgba(7, 255, 255, 0.1)",
            },
          },
        },
      },
      MuiTypography: {
        root: {
          "&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3": {
            color: brandColors.polkadotPink,
          },
          "&.MuiTypography-body1, &.MuiTypography-body2": {
            color: brandColors.white,
          },
        },
      },
      MuiCard: {
        root: {
          backgroundColor: brandColors.storm700,
          border: `2px solid ${brandColors.polkadotPink}`,
          position: "relative",
          zIndex: 1, // Keep cards below the AppBar
          marginTop: "8px", // Add some top margin to prevent overlap
          "&:hover": {
            borderColor: brandColors.white,
            boxShadow: `0 0 10px ${brandColors.polkadotPink}33`, // Pink glow on hover
          },
        },
      },
      MuiChip: {
        root: {
          backgroundColor: brandColors.polkadotPink,
          color: brandColors.white,
          "&:hover": {
            backgroundColor: brandColors.violet,
          },
        },
      },
      MuiIconButton: {
        root: {
          color: brandColors.polkadotPink,
          "&:hover": {
            backgroundColor: `${brandColors.polkadotPink}22`,
          },
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: brandColors.polkadotPink,
        },
      },
      MuiListItem: {
        root: {
          "&:hover": {
            backgroundColor: `${brandColors.polkadotPink}11`,
          },
          "&.Mui-selected": {
            backgroundColor: `${brandColors.polkadotPink}33`,
            "&:hover": {
              backgroundColor: `${brandColors.polkadotPink}44`,
            },
          },
        },
      },
    },
  })
);

export default {
  darkTheme,
};
