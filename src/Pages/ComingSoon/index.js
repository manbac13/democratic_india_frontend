import { Grid2, Typography, useTheme } from "@mui/material";

const ComingSoon = () => {
  const theme = useTheme();
  return (
    <>
      <Grid2
        container
        sx={{ paddingInline: "100px" }}
        justifyContent={"center"}
        alignItems={"center"}
        mt={{ xs: 1, sm: 2, md: 20 }}
      >
        <Grid2 size={12}>
          <Typography
            textAlign={"center"}
            sx={{
              letterSpacing: { xs: "8px", sm: "16px", md: "32px" },
              fontSize: { xs: "12px", sm: "16px", md: "26px" },
              mb: 2,
            }}
          >
            COMING SOON
          </Typography>

          <Typography
            textAlign={"center"}
            color={theme.palette.primary.dark}
            letterSpacing={"3px"}
            sx={{ fontSize: "12px" }}
          >
            We are working on it
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ComingSoon;
