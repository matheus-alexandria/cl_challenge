import { FormEvent, useState } from "react";

interface UpdateFormModal {
  currentPostTitle: string;
  currentPostContent: string;
  toggleUpdateConfirmationModal: () => void;
}

export function UpdateFormModal({ 
  toggleUpdateConfirmationModal,
  currentPostTitle = "", 
  currentPostContent = ""
}: UpdateFormModal) {
  const [title, setTitle] = useState(currentPostTitle);
  const [content, setContent] = useState(currentPostContent);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleSaveButtonEnabled() {
    if (title.length > 0 && content.length > 0) {
      return true;
    }

    return false;
  }

  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-[#777777] bg-opacity-80 z-10">
      <form
        className="min-w-[40%] m-6 bg-white p-6 rounded-xl flex flex-col gap-4"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <h1 className="font-extrabold text-lg">Edit item</h1>
        <div>
          <p>Title</p>
          <input
            type="text" 
            placeholder="Hello world"
            className="w-full border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p>Content</p>
          <textarea
            placeholder="Content here"
            className="w-full h-[74px] resize-none border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3">
          <button 
            type="submit" 
            onClick={() => toggleUpdateConfirmationModal()}
            className="w-[7.5rem] h-8 rounded-lg text-black font-bold border-2 border-gray-400 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>

          <button 
            type="submit"
            onClick={() => console.log("Update")}
            disabled={handleSaveButtonEnabled()}
            className={`w-[7.5rem] h-8 rounded-lg text-white font-bold transition-colors ${
              handleSaveButtonEnabled() ? 'bg-[#47b960] hover:bg-green-700' : 'bg-gray-500 opacity-75'
            }`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}