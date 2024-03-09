import { createAction, props } from "@ngrx/store";

export const addItems = createAction('[Item] Add items to display',props<{items:any[]}>());
export const clearData = createAction('[Item] Clear and reset the state');