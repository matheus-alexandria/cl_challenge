export function DeleteConfirmationModal() {
  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-[#777777] bg-opacity-80 z-10">
      <div className="min-w-[40%] h-36 bg-white flex flex-col gap-10 justify-start p-6 rounded-2xl">
        <h1 className="font-extrabold text-lg">Are you sure you want tot delete this item?</h1>
        
        <div className="flex justify-end gap-3">
          <button 
            type="submit" 
            className="w-[7.5rem] h-8 rounded-lg text-black font-bold border-2 border-gray-400 hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>

          <button 
            type="submit" 
            className="w-[7.5rem] h-8 rounded-lg text-white font-bold bg-del-red-500 hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}