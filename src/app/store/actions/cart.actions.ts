import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/interfaces/cart.interface";

export const addToCart = createAction('[cart]Add item to cart', props<{item:Cart}>());
export const removeFromCart = createAction('[cart]Remove item from cart', props<{cartId:string}>());