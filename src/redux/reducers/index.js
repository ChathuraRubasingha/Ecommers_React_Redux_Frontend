import { combineReducers } from "redux";
import { productReducer } from "./product-reducer";
import { islogged } from "../action/product-action";
import { loggedReducer } from "./islogged";

const reducers = combineReducers({
    allProducts: productReducer,
    isLogged: loggedReducer
})

export default reducers