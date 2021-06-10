import { combineReducers } from "redux";
import UserReducer from "./userReducer";

const RootReducer = combineReducers({
  user: UserReducer,
});

export default RootReducer;
