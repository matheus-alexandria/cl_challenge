import { createStore, combineReducers } from "redux";

import loginReducer from "./login/login.reducer";

const rootReducer = combineReducers({
  login: loginReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
