import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: { details: { name: "No Item" } },
  },
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant.details = action.payload;
    },
    clearRestaurant: (state, action) => {
      state.restaurant.details = { details: { name: "No Items" } };
    },
  },
});
export const { addRestaurant, clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
