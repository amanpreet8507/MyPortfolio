import { grey } from "@material-ui/core/colors";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#20202a",
      A600: "#2c2c36",
      A700: "#8c8c8e",
    },
    secondary: {
      main: "#f7bb08",
    },
    background: {
      paper: "#20202a",
      default: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "#8c8c8e",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#f7bb08",
      A600: "#ffe082",
      A700: "#8c8c8e",
    },
    secondary: {
      main: "#20202a",
    },
    background: {
      paper: "#fff",
      default: grey[200],
    },
    text: {
      primary: "#000",
      secondary: "#8c8c8e",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
  },
});

export { darkTheme, lightTheme };
