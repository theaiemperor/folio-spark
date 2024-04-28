import { createSlice } from "@reduxjs/toolkit";

interface darkModeStateType {
  value: boolean;
}

const initialState: darkModeStateType = {
  value: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});


export const { toggle } = darkMode.actions;
export default darkMode.reducer;
