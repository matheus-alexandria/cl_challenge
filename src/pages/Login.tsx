export function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-300">
      <div className="w-[35%] h-1/4 bg-white flex flex-col justify-start p-4 rounded-2xl">
        <h1 className="font-extrabold text-lg">Welcome to CodeLeap network!</h1>
        <form className="h-full flex flex-col justify-end gap-3">
          <div>
            <p>Please enter your username</p>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="w-32 h-8 bg-blue-400 rounded-lg text-white font-bold hover:bg-blue-600 transition-colors"
            >
              ENTER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}