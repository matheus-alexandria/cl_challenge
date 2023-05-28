interface GetPostsQueueParams {
  limit: number;
  offset?: number;
}

export async function getPostsRequests({ limit, offset = 0 }: GetPostsQueueParams) {
  const response = await fetch(
    `https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=${offset}`
  );
  const postData = await response.json();

  return postData.results;
}