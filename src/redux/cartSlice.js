import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
    },
    removeFromCart(state, action) {
      return state.filter((dish) => dish.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
