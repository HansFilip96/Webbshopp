import Products from "../components/screens/Products/Products";
import Checkout from "../components/screens/Checkout/Checkout";
import About from "../components/screens/About/About";
import Deals from "../components/screens/Deals/Deals";

const NoMatch = () => {
  return <div>404</div>;
};

export const ROUTES = [
  {
    path: "/checkout",
    exact: true,
    component: Checkout,
  },
  {
    path: "/deals",
    exact: true,
    component: Deals,
  },
  {
    path: "/",
    exact: true,
    component: Products,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "*",
    exact: true,
    component: NoMatch,
  },
];
