import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
//import grey from "@material-ui/core/colors/grey";

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
        light: "#BED5B3",
        main: "#23635B",
        dark: "#6E6151",
        contrastText: "#fff",
      },
      background: {
        paper: "#D05441",
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          background: "#EA5AA2",
        },
      },
      MuiTextField: {
        root: {
          overflow: "visible !important",
          color: "#E1147B ",
        },
      },
      MuiPaper: {
        root: {
          overflow: "visible !important",
          color: "#EA5AA2",
          backgroundColor: "#000000",
        },
      },
      MuiTable: {
        root: {
          color: "#E2CDB0 visible !important",
        },
      },
      MuiMenuItem: {
        root: {
          color: "#E2CDB0  !important",
        },
      },
      MuiLink: {
        root: {
          color: "linear-gradient(45deg, #E1147B 30%, #EA5AA2  90%)",
        },
      },
      MuiTouchRipple: {
        root: {
          color: "#E2CDB0 visible !important",
        },
      },
      MuiButton: {
        root: {
          color: "#E2CDB0  !important",
        },
      },
      MuiTypography: {
        root: {
          outlineStyle: "#E2CDB0",
          color: "#E2CDB0",
        },
      },
    },
  })
);

export default {
  darkTheme,
};