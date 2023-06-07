import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Drawer, Typography } from "@mui/material";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import CloseIcon from "@mui/icons-material/Close";
import CartContent from "./CartContent";

const Pointer = { cursor: "pointer" };

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
  const { cartQuantity, cartItems } = useShoppingCartContext();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
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

          <IconButton aria-label="cart" onClick={() => setIsDrawerOpen(true)}>
            <Badge
              badgeContent={cartQuantity}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "#ca0808",
                },
              }}
            >
              <ShoppingCartOutlined style={{ color: "white" }} />
            </Badge>
          </IconButton>
          <Drawer
            sx={{
              flexShrink: 0,
            }}
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1,
                m: 1,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Cart
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={() => setIsDrawerOpen(false)}
                style={Pointer}
                sx={{ border: 1, borderRadius: "50%", width: 25, height: 25 }}
              >
                <CloseIcon />
              </Typography>
            </Box>
            <CartContent />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
