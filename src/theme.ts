import { createTheme, responsiveFontSizes, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import {backgroundCards, boxShadow, defaultPadding, marginLeftRight, styledGradient} from "../../my-portifolio/src/constants/constants"

export let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
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
  background: styledGradient,
  WebkitBackgroundClip: "text",
  color: "transparent",
};

theme = responsiveFontSizes(theme);

export const StyledHero = styled("div")(() => ({
    backgroundColor: backgroundCards,
    borderRadius: "16px",
    boxShadow: boxShadow,
    marginLeft: marginLeftRight,
    marginRight: marginLeftRight,
    marginBottom: "5px",
    marginTop: "40px",
    padding: defaultPadding
  }));
  
  export const StyledHeroNav = styled("div")(() => ({
    backgroundColor: backgroundCards,
    borderRadius: "16px",
    boxShadow: boxShadow,
    marginLeft: marginLeftRight,
    marginRight: marginLeftRight,
    marginBottom: "5px",
    marginTop: "20px",
    padding: defaultPadding,
    paddingLeft: "0px"
  }));
  
  export const StyledImageAvatar = styled("img")(() => ({
      width: "78%",
    }));
