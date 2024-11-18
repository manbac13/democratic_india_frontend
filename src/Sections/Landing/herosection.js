import { Grid2, Stack, Typography } from "@mui/material";
import IntroChips from "../../Components/IntroChips";
import HyperlinkButton from "../../Components/HlButtons";

const HeroSection = () => {
  return (
    <>
      <Grid2 container spacing={2} justifyContent={"center"} mt={8}>
        <Grid2 size={12}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IntroChips title={"Empowering Voters"} />
          </Stack>
        </Grid2>

        <Grid2 size={12}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontSize: {
                  xl: "42px",
                  lg: "42px",
                  md: "42px",
                  sm: "36px",
                  xs: "30px",
                },
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Your Destination for Comprehensive Election Data!
            </Typography>
          </Stack>
        </Grid2>

        <Grid2
          size={{ xl: 8, lg: 8, md: 8, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Explore real-time updates on your constituency, state, and national
            election trends. From current MPs to state assembly seat shares, and
            registered political parties, get all the information you need to
            make informed decisions.
          </Typography>
        </Grid2>
      </Grid2>
      <Stack
        spacing={2}
        mt={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HyperlinkButton title={"Explore"} route={'explore'}/>
      </Stack>
    </>
  );
};

export default HeroSection;
