import { Grid2, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar4.png";
import SendIcon from "@mui/icons-material/Send";
import { StyledHero, StyledImageAvatar } from "../../../../theme";
import { textGradientStyle } from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  //   let CargoEng = "I'm a Full Stack Developer"
  //   let CargoPtbr = "Desenvolvedor Full Stack"

  return (
    <>
      <StyledHero>
        {/* <Container maxWidth="lg"> */}
          <Grid2 container spacing={1} alignItems="center">
            <Grid2
              size={{ xs: 12, md: 4 }}
              sx={{
                textAlign: { xs: "center", md: "left",  },
              }}
            >
              <StyledImageAvatar src={Avatar}></StyledImageAvatar>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }} textAlign="center">
              <Typography color="primary" variant="h1">
                Bruno Palma
              </Typography>
              <Typography
                color="secondary"
                variant="h3"
                fontWeight={700}
                sx={textGradientStyle}
              >
                I'm a Full Stack Developer
              </Typography>
              <Grid2 container display="flex" justifyContent="center">
                <Grid2 size={12} display="flex" justifyContent="center" marginTop="10px">
                  <StyledButton>
                    <SendIcon /> Contact Me
                  </StyledButton>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        {/* </Container> */}
      </StyledHero>
    </>
  );
};

export default Hero;
