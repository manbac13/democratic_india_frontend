import { Grid2 } from "@mui/material";
import HeroSection from "../../Sections/Landing/herosection";

const Landing = () => {
  return (
    <>
      <Grid2 container sx={{ paddingInline: "100px" }} justifyContent={'center'}>
        <Grid2 size={12}>
          <HeroSection />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Landing;
