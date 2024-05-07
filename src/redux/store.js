import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { balanceReducer } from "./balanceSlice";
import localeReducer from "./localeSlice";
import balanceReducer from "./balanceSlice";
export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  },
});

// was the first step, then sliced them into different slice-files

// const initialState = {
//   balance: {
//     value: 0,
//   },
//   locale: {
//     lang: "uk",
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   locale: localeReducer,
// });
// export const store = createStore(rootReducer);
