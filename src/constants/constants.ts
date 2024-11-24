import { styled } from "@mui/material";

const marginLeftRight = "3%";

export const StyledHero = styled("div")(() => ({
  backgroundColor: "rgb(29 29 29 / 91%)",
  borderRadius: "16px",
  boxShadow: "5px 5px 5px rgb(0 0 0 / 36%)",
  marginLeft: marginLeftRight,
  marginRight: marginLeftRight,
  marginBottom: "5px",
  marginTop: "40px",
  padding: "5px"
}));

export const StyledHeroNav = styled("div")(() => ({
  backgroundColor: "rgb(29 29 29 / 91%)",
  borderRadius: "16px",
  boxShadow: "5px 5px 5px rgb(0 0 0 / 36%)",
  marginLeft: marginLeftRight,
  marginRight: marginLeftRight,
  marginBottom: "5px",
  marginTop: "20px",
  padding: "5px",
  paddingLeft: "0px"
}));

export const StyledImageLanguage = styled("img")(() => ({
  width: "5%",
  margin: "10px",
}));

export const StyledImageAvatar = styled("img")(() => ({
    width: "78%",
  }));