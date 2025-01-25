import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  selectedLanguage: string;
}

const initialState: LanguageState = {
  selectedLanguage: 'English',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
