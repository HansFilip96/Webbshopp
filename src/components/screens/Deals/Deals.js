import { Container, Grid, Paper, Typography, List } from "@mui/material";
import { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import React from "react";

const Deals = (props) => {
  const [cartId, setCartID] = useState(1);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts");
        const carts = await response.json();
        setCarts(carts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const renderCarts = () => {
    if (carts.length === 0)
      return [1, 2, 3, 4].map((e) => <Cart loading={true} key={e} />);
    return carts.map((cart, i) => (
      <Cart
        key={i}
        {...cart}
        loading={false}
        setCartId={setCartID}
        selected={cartId === cart.id}
      />
    ));
  };

  return (
    <div id="Deals">
      <Container maxWidth="xl">
        <Typography variant="h1" mb={5}>
          Select a Deal
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <List>{renderCarts()}</List>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper elevation={3}>
              <iframe
                //   lägg in länk från din egna klarna i src
                src={`https://klarna-app96.herokuapp.com/cart-checkout/${cartId}`}
                title="Klarna"
                width={"100%"}
                height={"1000px"}
                style={{ border: "none" }}
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Deals;
