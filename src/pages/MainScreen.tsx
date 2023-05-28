import { FormEvent, useEffect, useState } from "react";
import { SubmitButton } from "../components/SubmitButton";
import { BlogPost } from "../components/BlogPost";
import { PostData } from "../models/PostData";
import { sendPostRequest } from "../actions/sendPostRequest";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setLoginUsername } from "../redux/login/login.actions";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal";
import { getPostsRequests } from "../actions/getPostsRequest";
import { UpdateFormModal } from "../components/UpdateFormModal";

export function MainScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);
  const [currentPost, setCurrentPost] = useState<PostData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const loginUsername = useSelector<RootState, string>(
    (state: RootState) => state.login.loginUsername
  );
  const dispatch = useDispatch();

  function handleButtonDisabled() {
    if (title.length > 0 && content.length > 0) {
      return false;
    }
    return true;
  }

  function handleUpdateBlogPosts(
    addPosts = false, 
    limit = 10, 
    offset = 0
  ) {
    getPostsRequests({
      limit,
      offset
    })
    .then(posts => {
      let allPosts = [];
      if (addPosts) {
        allPosts = [...blogPosts, ...posts];
      } else {
        allPosts = posts;
      }
      if (posts) setBlogPosts(allPosts);
    });
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPost: PostData = await sendPostRequest({
      username: loginUsername,
      title,
      content
    });

    setBlogPosts((blogPosts) => [newPost, ...blogPosts]);
    setTitle("");
    setContent("");
  }

  function handleLogout() {
    localStorage.removeItem("codeLeapLogin");
    dispatch(setLoginUsername(""));
  }

  function handleSetCurrentPost(post: PostData) {
    setCurrentPost(post);
  }

  function toggleDeleteConfirmationModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function toggleUpdateModal() {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  }

  useEffect(() => {
    handleUpdateBlogPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const scrollPosition = scrollTop + clientHeight;

      if ((scrollPosition + 10) >= scrollHeight) {
        handleUpdateBlogPosts(true, 10, blogPosts.length);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blogPosts.length])

  return (
    <>
      {isDeleteModalOpen && (
        <DeleteConfirmationModal 
          id={currentPost ? currentPost.id : null}
          handleUpdateBlogPosts={handleUpdateBlogPosts}
          toggleDeleteConfirmationModal={toggleDeleteConfirmationModal}
        />
      )}
      {isUpdateModalOpen && (
        <UpdateFormModal
          id={currentPost ? currentPost.id : null}
          currentPostTitle={currentPost ? currentPost.title : ""} 
          currentPostContent={currentPost ? currentPost.content : ""}
          toggleUpdateModal={toggleUpdateModal}
          handleUpdateBlogPosts={handleUpdateBlogPosts}
        />
      )}
      <div className="w-screen min-h-[100vh] flex items-center justify-center bg-[#dddddd]">
        <div className="w-1/2 min-h-screen bg-white">
          <header 
            className="w-full h-2 flex items-center justify-between px-6 py-8 bg-light-blue-400"
          >
            <p className="text-white font-bold">CodeLeap Network</p>
            <button 
              className="text-white text-sm border-2 p-1 rounded-lg hover:bg-light-blue-600 transition-colors"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </header>
          <form
            className="m-6 border-2 border-gray-400 py-3 px-5 rounded-xl flex flex-col gap-4"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <h1 className="font-extrabold text-lg">What's on your mind?</h1>
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
            <SubmitButton title="CREATE" disabled={handleButtonDisabled()} />
          </form>

          {blogPosts.map((blogPost) => {
            return (
              <BlogPost 
                key={blogPost.id} 
                post={blogPost} 
                handleSetCurrentPost={handleSetCurrentPost}
                toggleDeleteConfirmationModal={toggleDeleteConfirmationModal}
                toggleUpdateModal={toggleUpdateModal}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}