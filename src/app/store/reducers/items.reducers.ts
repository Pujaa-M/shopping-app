import { createReducer, on } from "@ngrx/store";
import { addItems, clearData } from "../actions/items.actions";

export const initialState:any = {};

export const itemReducer = createReducer(
  initialState,
  on(addItems, (state:any, {items}) => {
    return {...state, items}
  })
  // on(clearData, (state) => {
  //   return {...state, items: []}
  // })
)