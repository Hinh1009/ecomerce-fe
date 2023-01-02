import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import { ProductDetails } from "./components/Product/ProductDetails";
import { Products } from "./components/Product";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import { Search } from "./components/Product/Search";
import { LoginSignUp } from "./components/User/LoginSignUp";
import { useSelector } from "react-redux";
import UserOptions from "./components/layout/Header/UserOptions";
import { loadUser } from "./actions/userAction";
import Profile from "./components/User/Profile";
import ForgotPassword from "./components/User/ForgotPassword";
import { ResetPassword } from "./components/User/ResetPassword";
import store from "./store";
import ProtectedRoute from "./components/Route";
import { UpdateProfile } from "./components/User/UpdateProfile";
import { UpdatePassword } from "./components/User/UpdatePassword";
import { Cart } from "./components/Cart";
import { Shipping } from "./components/Cart/Shipping";
import { ConfirmOrder } from "./components/Cart/ConfirmOrder";
import { Payment } from "./components/Cart/Payment";
import { OrderSuccess } from "./components/Cart/OrderSuccess";
import { MyOrder } from "./components/Order/MyOrder";
import { OrderDetails } from "./components/Order/OrderDetails";
import { Dashboard } from "./components/Admin/Dashboard";
import { ProductList } from "./components/Admin/ProductList";
import { NewProduct } from "./components/Admin/NewProduct";
import { UpdateProduct } from "./components/Admin/UpdateProduct";
import { OrderList } from "./components/Admin/OrderList";
import { ProcessOrder } from "./components/Admin/ProcessOrder";
import { UserList } from "./components/Admin/UserList";
import { UpdateUser } from "./components/Admin/UpdateUser";

import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={LoginSignUp} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />
        <ProtectedRoute exact path="/orders" component={MyOrder} />
        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UserList}
        />
        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
