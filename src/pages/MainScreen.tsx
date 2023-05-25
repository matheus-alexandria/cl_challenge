import { SubmitButton } from "../components/SubmitButton";

export function MainScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-300">
      <div className="w-1/2 h-full bg-white">
        <header 
          className="w-full h-2 flex items-center px-6 py-8 bg-blue-400 text-white font-bold"
        >
          CodeLeap Network
        </header>
        <form className="m-6 border-2 border-gray-400 py-3 px-5 rounded-xl flex flex-col gap-4">
          <h1 className="font-extrabold text-lg">What's on your mind?</h1>
          <div>
            <p>Title</p>
            <input 
              type="text" 
              placeholder="Hello world"
              className="w-full border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
            />
          </div>
          <div>
            <p>Content</p>
            <textarea
              placeholder="Content here"
              className="w-full resize-none border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
            />
          </div>
          <SubmitButton title="CREATE" />
        </form>
      </div>
    </div>
  )
}