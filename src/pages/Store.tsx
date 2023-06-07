import storeItems from "../data/item.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import StoreItem from "../components/StoreItem";

function Store() {
  return (
    <Container>
      <h2>Store</h2>

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* ////////////////Start////////////// */}
            {storeItems &&
              storeItems.map((item) => {
                return (
                  <Grid md={3} key={item.id}>
                    <StoreItem {...item} />
                  </Grid>
                );
              })}
            {/* ////////////////end////////////// */}
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default Store;
