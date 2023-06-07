import { iProduct } from "../models/iProduct";
import { formatCurrency } from "../utils/formatCurrency";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export default function StoreItem({ id, title, price, image }: iProduct) {
  const {
    getItemCountity,
    increaseItemCountity,
    decreaseItemCountity,
    removeFromCart,
  } = useShoppingCartContext();

  const quantity: number = getItemCountity(id);

  return (
    <>
      <Box textAlign="center" boxShadow={1} sx={{ p: 3 }}>
        <Box sx={{ width: "100%" }} component="img" src={image} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#ffd600" }}
          >
            {formatCurrency(price)}
          </Typography>
        </Box>
        <div>
          {quantity === 0 ? (
            <Button
              variant="contained"
              onClick={() => increaseItemCountity(id)}
              startIcon={<AddShoppingCartIcon />}
              style={{ margin: "23px" }}
            >
              Add To Cart
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={() => increaseItemCountity(id)}
              >
                <AddIcon />
              </Button>
              <span style={{ padding: "20px" }}>{quantity}</span>
              <Button
                variant="outlined"
                onClick={() => decreaseItemCountity(id)}
              >
                <RemoveIcon />
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                variant="contained"
                color="error"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </>
          )}
        </div>
      </Box>
    </>
  );
}
