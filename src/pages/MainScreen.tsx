import { FormEvent, useEffect, useState } from "react";
import { SubmitButton } from "../components/SubmitButton";
import { BlogPost } from "../components/BlogPost";
import { PostData } from "../models/PostData";
import { sendPostRequest } from "../actions/sendPostRequest";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setLoginUsername } from "../redux/login/login.actions";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal";

export function MainScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);
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

  function handleRemovePost(id: number) {
    const newPosts = blogPosts.filter((bp) => bp.id !== id);
    setBlogPosts(newPosts);
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

  useEffect(() => {
    fetch('https://dev.codeleap.co.uk/careers/')
      .then(response => response.json())
      .then((data) => {
        const results: PostData[] = data.results;
        if (results) setBlogPosts(results);
      });
  }, []);

  return (
    <>
      {/* <DeleteConfirmationModal /> */}
      <div className="w-screen min-h-[100vh] flex items-center justify-center bg-[#dddddd]">
        <div className="w-1/2 h-full bg-white">
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
                handleRemovePost={handleRemovePost} 
              />
            )
          })}
        </div>
      </div>
    </>
  )
}