import { createTheme } from "@mui/material/styles";
const white = "#FFFFFF";
const neonDark = "#00C896";
const primary = {
  light: neonDark,
  main: neonDark,
  dark: neonDark,
  contrastText: white,
};
const h1 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "30px",
};
const h2 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
};
const h3 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "17px",
  lineHeight: "20px",
};
const h4 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
};
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            paper: "#F8FAFD",
            default: "#fff",
          },
          text: {
            primary: "#1B1B1B",
            secondary: "#B3B3B3",
          },
        }
      : {
          // palette values for dark mode
          background: {
            paper: "#1B1B1B",
            default: "#121212",
          },
          text: {
            primary: "#F8FAFD",
            secondary: "#fff",
          },
        }),
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1,
    h2,
    h3,
    h4,
  },
});
const mainTheme = createTheme({
  palette: {
    primary,
    background: {
      paper: "#F8FAFD",
      default: "#FFFFFF",
    },
    text: {
      primary: "#1B1B1B",
      secondary: "#B3B3B3",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1,
    h2,
    h3,
    h4,
  },
});
export default mainTheme;
