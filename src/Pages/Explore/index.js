import { Grid2 } from "@mui/material";
import ExploreHero from "../../Sections/Explore/exploreHero";

const Explore = () => {
  return (
    <>
      <Grid2
        container
        sx={{ paddingInline: "100px" }}
        justifyContent={"center"}
      >
        <Grid2 size={12} sx={{mt: 8}}>
          <ExploreHero />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Explore;
