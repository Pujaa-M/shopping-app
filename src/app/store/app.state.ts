import { cartState } from "./reducers/cart.reducers"

export interface AppState {
  cart: cartState,
  item: any
}