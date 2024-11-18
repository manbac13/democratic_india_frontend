import { Stack, Typography, useTheme } from "@mui/material";
import { CardPos } from "iconsax-react";

const IntroChips = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        sx={{ padding: 1 , borderRadius: 1, backgroundColor: `${theme.palette.grey[900]}`}}
      >
        <CardPos size="16" color={theme.palette.warning.dark} />
        <Typography
          sx={{ fontSize: "14px", color: theme.palette.primary.dark }}
        >
          {title}
        </Typography>
      </Stack>
    </>
  );
};

export default IntroChips;
