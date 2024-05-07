import { createSlice } from "@reduxjs/toolkit";

// export const changeLang = (newLang) => {
//   return {
//     type: "locale/changeLang",
//     payload: newLang,
//   };
// };

// export const localeReducer = (state = { lang: "uk" }, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return { lang: action.payload };
//     default:
//       return state;
//   }
// };

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export default slice.reducer;
export const { changeLang } = slice.actions;
