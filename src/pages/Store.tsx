import storeItems from "../data/item.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

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
            {/* <Grid md={3}>
              <Box
                sx={{ width: "100%" }}
                component="img"
                src="./images/nokia.jpg"
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                product one
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#ffd600" }}
              >
                106 $
              </Typography>
            </Grid> */}
            {storeItems.map((item) => {
              return (
                <Grid md={3}>
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src={"" + item.imgUrl + ""}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#ffd600" }}
                  >
                    {item.price} $
                  </Typography>
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
