import { useSelector } from "react-redux";
import { MainScreen } from "../pages/MainScreen";
import { SignUp } from "../pages/SignUp";
import { RootState } from "../redux";

export function Routes() {
  const loginUsername = useSelector<RootState, string>(
    (state: RootState) => state.login.loginUsername
  );
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