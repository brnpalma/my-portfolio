import { styled } from "@mui/material";
import { boxShadow, styledGradient } from "../../theme";
import React, { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    background: styledGradient,
    borderRadius: "2.4rem",
    color: theme.palette.primary.main,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    padding: "5px 20px",
    transition: "all .3s",
    width: "fit-content",
    border: "none",
    cursor: "pointer",
    '&:hover':{
        opacity: ".8",
        boxShadow: boxShadow
    }
  }));

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
