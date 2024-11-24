import { Container, Grid2, Typography } from "@mui/material";
import Brazil from "../../../../assets/images/brazil.png";
import Eua from "../../../../assets/images/eua.png";
import { StyledHeroNav } from "../../../../constants/constants";
import { StyledImageLanguage } from "../../../../constants/constants";

const Nav = () => {
  return (
    <>
      <StyledHeroNav>
        <Container maxWidth="lg">
          <Grid2 container spacing={5}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <StyledImageLanguage src={Brazil}></StyledImageLanguage>
              <StyledImageLanguage src={Eua}></StyledImageLanguage>
            </Grid2>
            <Grid2 container display="flex" justifyContent="center" alignItems="center">
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
        </Container>
      </StyledHeroNav>
    </>
  );
};

export default Nav;
