import { Box, Typography } from "@mui/material";
import { CartItem } from "./CartItem";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/item.json";

export default function CartContent() {
  const { cartQuantity, cartItems } = useShoppingCartContext();

  return (
    <>
      <Box p={2} width="350px" role="presentation">
        {cartQuantity === 0 ? (
          <Typography variant="h6" component="div">
            Cart is empty
          </Typography>
        ) : (
          <Typography variant="h6" component="div">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Typography>
        )}

        {cartQuantity === 0 ? (
          ""
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <h4>Total</h4>
            <h4>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </h4>
          </Box>
        )}
      </Box>
    </>
  );
}
