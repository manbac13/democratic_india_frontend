import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Servicecard = ({ title, route }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
          px: 2,
          minWidth: "150px",
          backgroundColor: theme.palette.grey[900],
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "32px" },
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              textTransform: "capitalize",
              backgroundColor: theme.palette.grey[900],
              color: theme.palette.primary.dark,
              border: `1px solid ${theme.palette.divider}`,
            }}
            onClick={() => navigate(`/${route}`)}
          >
            Explore
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Servicecard;
