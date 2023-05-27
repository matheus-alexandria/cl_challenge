import { deletePostRequest } from "../actions/deletePostRequest";

interface DeleteConfirmationModalProps {
  id: number | null;
  handleRemovePost: (id: number) => void;
  toggleDeleteConfirmationModal: () => void;
}

export function DeleteConfirmationModal({ 
  id,
  handleRemovePost,
  toggleDeleteConfirmationModal
}: DeleteConfirmationModalProps) {
  async function handleDeletePost() {
    if (id) {
      const status = await deletePostRequest(id);
      if (status === 204) {
        handleRemovePost(id);
        toggleDeleteConfirmationModal();
      }
    }
  }

  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-[#777777] bg-opacity-80 z-10">
      <div className="min-w-[40%] h-36 bg-white flex flex-col gap-10 justify-start p-6 rounded-2xl">
        <h1 className="font-extrabold text-lg">Are you sure you want tot delete this item?</h1>
        
        <div className="flex justify-end gap-3">
          <button 
            type="submit" 
            onClick={() => toggleDeleteConfirmationModal()}
            className="w-[7.5rem] h-8 rounded-lg text-black font-bold border-2 border-gray-400 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>

          <button 
            type="submit"
            onClick={() => handleDeletePost()}
            className="w-[7.5rem] h-8 rounded-lg text-white font-bold bg-del-red-500 hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}