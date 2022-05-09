import React from "react";
import {
  Typography,
  Container,
  Grid,
  Divider,
  Box,
  Collapse,
} from "@mui/material";
import { connect } from "react-redux";
import CartItem from "../../CartItem/CartItem";

import { TransitionGroup } from "react-transition-group";

const Checkout = ({ orders, totalPrice, deliveryFee, productPrice }) => {
  const renderCartItems = () => {
    return orders.map((item, i) => (
      <Collapse key={i}>
        <CartItem key={i} {...item} />
      </Collapse>
    ));
  };

  const bigText = { fontWeight: 700, fontSize: "1.2rem" };
  const text = { fontWeight: 700, fontSize: "0.8rem" };

  return (
    <Box id="Checkout_screen" sx={{ paddingBottom: "50px" }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <Typography variant="h1" sx={{ color: "text.primary" }}>
            Checkout
          </Typography>
        </Box>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <TransitionGroup>{renderCartItems()}</TransitionGroup>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "20px" }} />
        <Grid container spacing={2} justify="center">
          <Grid item xs={10}>
            subtotal:
          </Grid>
          <Grid item xs={2} sx={text}>
            {productPrice}
          </Grid>
          <Grid item xs={10}>
            shipping:
          </Grid>
          <Grid item xs={2} sx={text}>
            {deliveryFee}
          </Grid>
          <Grid item xs={10} sx={bigText}>
            total:
          </Grid>
          <Grid item xs={2} sx={bigText}>
            {totalPrice}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { orders, totalPrice, deliveryFee, productPrice } = state.cart;
  return { orders, totalPrice, deliveryFee, productPrice };
};

export default connect(mapStateToProps)(Checkout);
