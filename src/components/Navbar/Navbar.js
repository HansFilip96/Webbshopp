import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import CartButton from "../CartButton/CartButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = (props) => {
  const { theme, toggleColorMode } = useTheme();
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#00c896" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Techover
          </Typography>

          <Button onClick={() => history.push("/")} color="inherit">
            Products
          </Button>
          <Button onClick={() => history.push("/deals")} color="inherit">
            Deals
          </Button>

          <Button onClick={() => history.push("/about")} color="inherit">
            About
          </Button>
          <Button onClick={toggleColorMode} color="inherit">
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
          <CartButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
