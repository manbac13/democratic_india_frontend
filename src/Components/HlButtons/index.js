import { Button, useTheme } from "@mui/material";
import { Data } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import useMenu from "../../Hooks/Menu/useMenu";

const HyperlinkButton = ({ title, route, slug }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setActiveItemAction } = useMenu();
  return (
    <Button
      variant="contained"
      disableRipple
      sx={{
        fontSize: "20px",
        textTransform: "capitalize",
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.divider}`,
      }}
      startIcon={
        <Data
          style={{ marginRight: "4px" }}
          size="20"
          color={`${theme.palette.primary.dark}`}
        />
      }
      onClick={() => {
        navigate(`/${route}`);
        setActiveItemAction(slug);
      }}
    >
      {title}
    </Button>
  );
};

export default HyperlinkButton;
