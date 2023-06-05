import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const pages = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/store",
    name: "Store",
  },
  {
    url: "/about",
    name: "About",
  },
];

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => {
              return (
                <Link
                  key={page.name}
                  to={page.url}
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginRight: "20px",
                    textDecoration: "none",
                  }}
                >
                  {page.name}
                </Link>
              );
            })}
          </Box>
          <Link to="/cart">
            <IconButton aria-label="cart">
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "lightgreen",
                    backgroundColor: "green",
                  },
                }}
              >
                <ShoppingCartOutlined style={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
