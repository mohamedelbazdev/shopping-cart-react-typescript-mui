import { Box, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

export default function ShoppingCart() {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
      >
        <Box p={2} width="300px" role="presentation">
          <Typography variant="h6" component="div">
            My Cart
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
