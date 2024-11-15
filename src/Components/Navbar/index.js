import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import "./index.css";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const appItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Explore",
      route: "/explore",
    },
    {
      name: "Reports",
      route: "/reports",
    },
    {
      name: "About Us",
      route: "/about-us",
    },
    {
      name: "Report Errors",
      route: "/report-errors",
    },
  ];
  return (
    <>
      <AppBar
        position="sticky"
        className="appbar"
        sx={{ backgroundColor: "#121212", paddingY: 6 }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: "40px",
              fontWeight: "500",
              fontFamily: '"Teko", serif',
              mr: 10,
              cursor: "pointer",
            }}
          >
            Democratic India
          </Typography>

          <Stack direction={"row"} spacing={10}>
            {appItems.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "17px",
                  cursor: "pointer",
                  fontWeight: 500,
                  color: activeItem === index ? "#fff" : "#adadad",
                  lineHeight: "24px",
                }}
                onClick={() => setActiveItem(index)}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
