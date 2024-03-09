import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "../actions/cart.actions";
import { AppState } from "src/app/store/app.state";
import { Cart } from "src/app/interfaces/cart.interface";

export interface cartState {
  cart: Cart[]
}

export const initialState: cartState = {
  cart: []
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {item}) => {
    return {...state, cart: [...state.cart, item]}
  }),
  on(removeFromCart, (state, {cartId}) => {
    return {...state, cart:state.cart.filter(cartData => cartData.id !== cartId)}
  })
)