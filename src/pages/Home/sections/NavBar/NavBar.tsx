import { Grid2, Typography } from "@mui/material";
import Brazil from "../../../../assets/images/brazil.png";
import Eua from "../../../../assets/images/eua.png";
import { StyledHeroNav } from "../../../../theme";
import LanguageButton from "../../../../components/StyledButton/LanguageButton";
import { defaultPaddingNav } from "../../../../theme";

const NavBar = () => {
  return (
    <>
      <StyledHeroNav>
        {/* <Container maxWidth="lg"> */}
        <Grid2
          container
          spacing={5}
          justifyContent="space-between"
          padding={defaultPaddingNav}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <LanguageButton backgroundImage={Brazil} marginLeft="0px"></LanguageButton>
            <LanguageButton backgroundImage={Eua} marginLeft="10px"></LanguageButton>
          </Grid2>
          <Grid2 container display="flex" alignItems="center">
            <Grid2 size={{ md: 2.4 }} display="flex" justifyContent="center">
              <Typography color="primary" variant="h5" textAlign="center">
                Home
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 2.4 }} display="flex" justifyContent="center">
              <Typography color="primary" variant="h5" textAlign="center">
                Sobre
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 2.4 }} display="flex" justifyContent="center">
              <Typography color="primary" variant="h5" textAlign="center">
                Skills
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 2.4 }} display="flex" justifyContent="center">
              <Typography color="primary" variant="h5" textAlign="center">
                Portifólio
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 2.4 }} display="flex" justifyContent="center">
              <Typography color="primary" variant="h5" textAlign="center">
                Contato
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* </Container> */}
      </StyledHeroNav>
    </>
  );
};

export default NavBar;
