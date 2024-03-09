import { ActionReducerMap } from "@ngrx/store";
import { itemReducer } from "./items.reducers";
import { cartReducer } from "./cart.reducers";

export const reducers: ActionReducerMap<any> = {
  itemsAdded: itemReducer,
  cart: cartReducer
}