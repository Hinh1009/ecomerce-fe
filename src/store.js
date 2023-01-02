import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  productReducer,
  newProductReducer,
} from "./reducers/productReducer";

import { cartReducer } from "./reducers/cartReducer";

import {
  newOrderReducer,
  myOrdersReducer,
  allOrdersReducer,
  orderReducer,
  orderDetailsReducer,
} from "./reducers/orderReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  newReview: newReviewReducer,
  cart: cartReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  profile: profileReducer,
  userDetails: userDetailsReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  orderDetails: orderDetailsReducer,
  order: orderReducer,
  product: productReducer,
  newProduct: newProductReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
