import {
  configureStore,
  getDefaultMiddleware,
  applyMiddleware,
} from "@reduxjs/toolkit";
import loginCheckerReducer from "./Redux/variavel";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    loginAuth: loginCheckerReducer,
  },
  middleware: [thunk],

  // getDefaultMiddleware({
  //   serializableCheck: false,
  //   applyMiddleware,
  // }),

  // applyMiddleware(thunk),
});
