import { createTheme, responsiveFontSizes, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const backgroundCards = "rgb(29 29 29 / 91%)";
export const boxShadow = "5px 5px 5px rgb(0 0 0 / 36%)";
export const defaultPadding = "10px";
export const defaultPaddingNav = "10px";
export const marginLeftRight = "3%";
export const styledGradient =  "linear-gradient(90deg, rgba(229, 62, 168, .906), rgba(172, 47, 189, .925) 60%)";


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
    padding: defaultPadding,
    display: "block",
    alignItems: "center"
  }));
  
  export const StyledHeroNav = styled("div")(() => ({
    backgroundColor: backgroundCards,
    borderRadius: "16px",
    boxShadow: boxShadow,
    marginLeft: marginLeftRight,
    marginRight: marginLeftRight,
    marginBottom: "5px",
    marginTop: "20px",
    padding: defaultPaddingNav,
    paddingLeft: "0px"
  }));
  
  export const StyledImageAvatar = styled("img")(() => ({
      width: "50%",
    }));
