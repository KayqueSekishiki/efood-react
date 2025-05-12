import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../../services/api";

type SelectedDishState = {
  dish: Dish | null;
};

const initialState: SelectedDishState = {
  dish: null,
};

const SelectedDishSlice = createSlice({
  name: "selectedDish",
  initialState,
  reducers: {
    selectDish: (state, action: PayloadAction<Dish>) => {
      state.dish = action.payload;
    },
  },
});

export const { selectDish } = SelectedDishSlice.actions;
export default SelectedDishSlice.reducer;
