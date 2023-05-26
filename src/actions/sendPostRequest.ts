interface RequestPostData {
  username: string;
  title: string;
  content: string;
}

export async function sendPostRequest(data: RequestPostData) {
  const response = await fetch('https://dev.codeleap.co.uk/careers/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });

  const newPost = await response.json();
  return newPost;
}