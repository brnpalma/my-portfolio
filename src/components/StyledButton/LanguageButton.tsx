import { styled } from "@mui/material";
import { boxShadow } from "../../theme";

interface LanguageButtonProps {
    backgroundImage: string,
    marginLeft: string
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ backgroundImage, marginLeft }) => {
  const LanguageButton = styled("button")(() => ({
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover",
    borderRadius: "50%",
    transition: "all .3s",
    border: "none",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    marginLeft: marginLeft,
    '&:hover':{
        opacity: ".8",
        boxShadow: boxShadow
    }
  }));

  return (
    <>
      <LanguageButton></LanguageButton>
    </>
  );
};

export default LanguageButton;
