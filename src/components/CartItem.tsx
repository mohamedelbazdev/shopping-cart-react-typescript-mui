import { Box, Typography } from "@mui/material";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/item.json";
import { formatCurrency } from "../utils/formatCurrency";
import CloseIcon from "@mui/icons-material/Close";

const Pointer = { cursor: "pointer" };

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCartContext();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src={item.image} style={{ width: "80px", marginRight: 10 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", alignContent: "center" }}>
          <div>
            <p style={{ fontSize: 15, margin: 5 }}>
              {item.title}
              {quantity > 1 && (
                <span style={{ marginLeft: 5, fontSize: 12 }}>{quantity}x</span>
              )}
            </p>
            <p style={{ fontSize: 15, margin: 5, color: "#999" }}>
              {formatCurrency(item.price)}
            </p>
          </div>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignContent: "center" }}>
        <p style={{ fontSize: 15, margin: 5, color: "#999" }}>
          {formatCurrency(item.price * quantity)}
        </p>
        <Typography
          variant="h6"
          component="div"
          style={Pointer}
          sx={{ border: 1, borderRadius: "50%", width: 25, height: 25 }}
          onClick={() => removeFromCart(item.id)}
        >
          <CloseIcon />
        </Typography>
      </Box>
    </Box>
  );
}
