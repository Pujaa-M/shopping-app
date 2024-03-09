import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Cart } from "src/app/interfaces/cart.interface";
import { cartState } from "../reducers/cart.reducers";

export const getCart = createFeatureSelector<cartState>('cart')

export const selectCartItems = createSelector(getCart, state => state.cart)

export const getTotalCost = createSelector(selectCartItems, (cartItems: Cart[]) => {
  console.log(cartItems)
  return cartItems.reduce((totalCost, cartItem) => totalCost + +cartItem.cost, 0)
})