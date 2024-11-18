import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import "./index.css";
import { useEffect, useState } from "react";
import { HambergerMenu } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import useMenu from "../../Hooks/Menu/useMenu";

const drawerWidth = 240;

const Navbar = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { selectedItem, setActiveItemAction } = useMenu();

  const appItems = [
    {
      name: "Home",
      route: "/",
      slug: "home",
    },
    {
      name: "Explore",
      route: "/explore",
      slug: "explore",
    },
    {
      name: "Reports",
      // route: "/reports",
      route: "/coming-soon",
      slug: "reports",
    },
    {
      name: "About Us",
      // route: "/about-us",
      route: "/coming-soon",
      slug: "about_us",
    },
    {
      name: "Report Errors",
      // route: "/report-errors",
      route: "/coming-soon",
      slug: "report_errors",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (route, slug) => {
    navigate(route);
    setActiveItemAction(slug);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontWeight: "500",
          fontFamily: '"Teko", serif',
          my: 2,
          fontSize: "28px",
        }}
      >
        Democratic India
      </Typography>
      <Divider />
      <List>
        {appItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={() => handleNavigation(item.route, item.slug)}
          >
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        position="sticky"
        className="appbar"
        sx={{
          backgroundColor: "#121212",
          paddingY: 6,
          paddingInline: { xs: "20px", sm: "20px", md: "100px" },
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "left", sm: "center" },
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HambergerMenu />
          </IconButton>
          <Typography
            component="div"
            sx={{
              fontSize: {
                xl: "40px",
                lg: "36px",
                md: "28px",
                sm: "24px",
                xs: "24px",
              },
              fontWeight: "500",
              fontFamily: '"Teko", serif',
              mr: { xs: 4, sm: 4, md: 6, lg: 10 },
              cursor: "pointer",
            }}
          >
            Democratic India
          </Typography>

          <Stack
            direction={"row"}
            spacing={{ lg: 10, md: 8, sm: 6 }}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {appItems.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: {
                    xl: "17px",
                    lg: "17px",
                    md: "17px",
                    sm: "14px",
                    xs: "17px",
                  },
                  cursor: "pointer",
                  fontWeight: 500,
                  color: selectedItem === item.slug ? "#fff" : "#adadad",
                  lineHeight: "24px",
                }}
                onClick={() => {
                  handleNavigation(item.route, item.slug);
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
