import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ComponentState {
  Language?: string;
  Theme?: string;
}

const initialState: ComponentState = {
  Language: "VN",
  Theme: "black",
};
const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.Language = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.Theme = action.payload;
    },
  },
});

export const { setLanguage, setTheme } = configSlice.actions;
export default configSlice;
