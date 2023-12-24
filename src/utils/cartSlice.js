import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cost: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.cost = state.cost + action.payload.price / 100;
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const { prevState, toBeDeleted } = action.payload;
      let found = "notFound";
      let newState = [];
      for (let i = 0; i < prevState.length; i++) {
        if (found === "notFound" && prevState[i] === toBeDeleted) {
          found = "found";
          continue;
        }
        newState.push(prevState[i]);
      }
      state.items = newState;
      state.cost = state.cost - toBeDeleted.price / 100;

      // Use filter to create a new array without the item to be removed
      // state.items = state.items.filter((item) => item !== itemToRemove);
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
