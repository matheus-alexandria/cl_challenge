import { FormEvent, useEffect, useState } from "react";
import { SubmitButton } from "../components/SubmitButton";
import { BlogPost } from "../components/BlogPost";
import { PostData } from "../models/PostData";

export function MainScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);

  function handleButtonDisabled() {
    if (title.length > 0 && content.length > 0) {
      return false;
    }

    return true;
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  useEffect(() => {
    fetch('https://dev.codeleap.co.uk/careers/')
      .then(response => response.json())
      .then((data) => {
        const results: PostData[] = data.results;
        console.log(results[0]);
        if (results) setBlogPosts([results[0]]);
      });
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#dddddd]">
      <div className="w-1/2 h-full bg-white">
        <header 
          className="w-full h-2 flex items-center px-6 py-8 bg-light-blue-400 text-white font-bold"
        >
          CodeLeap Network
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <p>Content</p>
            <textarea
              placeholder="Content here"
              className="w-full h-[74px] resize-none border-2 border-gray-400 px-2 py-1 rounded-md mt-1"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <SubmitButton title="CREATE" disabled={handleButtonDisabled()} />
        </form>

        {blogPosts.map((blogPost) => {
          return (
            <BlogPost post={blogPost} />
          )
        })}
      </div>
    </div>
  )
}