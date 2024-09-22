import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";


const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof appReducer>;


const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  
  return appReducer(state, action);
};

export default rootReducer;
