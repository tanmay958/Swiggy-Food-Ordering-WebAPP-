import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: "",
  },
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    clearRestaurant: (state, action) => {
      state.restaurant = "";
    },
  },
});
export const { addRestaurant, clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
