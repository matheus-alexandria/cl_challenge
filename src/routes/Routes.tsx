import { useDispatch, useSelector } from "react-redux";
import { MainScreen } from "../pages/MainScreen";
import { SignUp } from "../pages/SignUp";
import { RootState } from "../redux";
import { setLoginUsername } from "../redux/login/login.actions";

export function Routes() {
  let loginUsername = useSelector<RootState, string>(
    (state: RootState) => state.login.loginUsername
  );
  const dispatch = useDispatch();

  if (loginUsername.length === 0) {
    const savedLogin = localStorage.getItem("codeLeapLogin");
    if (savedLogin) {
      loginUsername = savedLogin;
      dispatch(setLoginUsername(savedLogin));
    }
  }

  return (
    <>
      {loginUsername.length > 0 ? (
        <MainScreen />
      ) : (
        <SignUp />
      )}
    </>
  )
}