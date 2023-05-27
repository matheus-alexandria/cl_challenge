import { FormEvent, useState } from "react"
import { SubmitButton } from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setLoginUsername } from "../redux/login/login.actions";

export function SignUp() {
  const [login, setLogin] = useState("");
  const dispatch = useDispatch();

  function handleButtonDisabled() {
    if (login.length > 0) {
      return false;
    }

    return true;
  }

  function handleLoginSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (login === "Matheus") {
      localStorage.setItem("codeLeapLogin", login);
      dispatch(setLoginUsername(login));
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#dddddd]">
      <div className="min-w-[35%] min-h-[25%] bg-white flex flex-col justify-start p-4 rounded-2xl">
        <h1 className="font-extrabold text-lg">Welcome to CodeLeap network!</h1>
        <form onSubmit={(e) => handleLoginSubmit(e)} className="h-full flex flex-col justify-end gap-3">
          <div>
            <p>Please enter your username</p>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <SubmitButton title="ENTER" disabled={handleButtonDisabled()}/>
        </form>
      </div>
    </div>
  )
}