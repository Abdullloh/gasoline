import { data } from "../data/data";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  name: "language",
  languageData: data.uz,
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.languageData = data[action.payload];
    },
  },
});

export default languageSlice.reducer;

export const { setLanguage } = languageSlice.actions;