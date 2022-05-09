import { Container, Grid, Typography, Button, List } from "@mui/material";

import React from "react";
import { connect } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";

const Products = ({ products, loading, error, orders }) => {
  const renderProductsCard = () => {
    if (loading)
      return [1, 2, 3, 4, 5].map((e, i) => (
        <ProductCard key={e} loading={true} />
      ));

    return products.map((product, i) => {
      const order = orders.find((order) => order.product.id === product.id);
      const quantity = order ? order.quantity : 0;

      return (
        <ProductCard key={i} {...product} loading={false} quantity={quantity} />
      );
    });
  };

  return (
    <div id="product__screen">
      <Container maxWidth="md" sx={{ bgcolor: "background.primary" }}>
        <div className="Products__view">
          <div
            className="product__view__header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Typography variant="h1" sx={{ color: "text.primary" }}>
              välj varor
            </Typography>
          </div>

          <Grid container spacing={2} justify={"center"}>
            <Grid item xs={12}>
              <List sx={{ bgcolor: "background.paper" }}>
                {renderProductsCard()}
              </List>
            </Grid>
          </Grid>
          <div
            style={{
              padding: "20px 0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained">köp</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { items, loading, error } = state.products;
  const { orders } = state.cart;
  return { products: items, loading, error, orders };
};

export default connect(mapStateToProps)(Products);
