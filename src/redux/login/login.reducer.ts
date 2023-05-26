import { actions } from "./login.actions";

type Action = {
  type: keyof typeof actions;
  payload: string;
};

const initialState = {
  loginUsername: ""
};

export default function mathReducer(state = initialState, action: Action) {
  switch (action.type) {
    case actions.SET_LOGIN_USERNAME:
      return { loginUsername: action.payload };
    default:
      return state;
  }
}
