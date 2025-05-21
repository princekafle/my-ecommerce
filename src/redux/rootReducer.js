import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productReducer from "./product/productSlice.js";
import cartReducer from "./cart/cartSlice.js";
import userPreferenceReducer from "./userPreference/userPreferenceSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
