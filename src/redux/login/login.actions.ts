export const actions = {
  SET_LOGIN_USERNAME: "SET_LOGIN_USERNAME"
};

export function setLoginUsername(payload: string) {
  return {
    type: actions.SET_LOGIN_USERNAME,
    payload
  };
}
