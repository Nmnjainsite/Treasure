import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#38bdf8",
    },
    secondary: {
      main: "#e4e7e4",
    },
  },
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    fontSize: 15,
  },

  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
