import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      //   main: purple[500],
    },
    secondary: {
      main: purple[500],
    },
    background: {
      default: "#414141",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

export const textGradientStyle = {
  background: `linear-gradient(90deg, rgba(229, 62, 168, .906), rgba(172, 47, 189, .925) 60%)`,
  WebkitBackgroundClip: "text",
  color: "transparent",
};

theme = responsiveFontSizes(theme);
