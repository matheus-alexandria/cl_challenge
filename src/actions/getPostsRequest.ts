export async function getPostsRequests() {
  const response = await fetch('https://dev.codeleap.co.uk/careers/');
  const postData = await response.json();

  return postData.results;
}