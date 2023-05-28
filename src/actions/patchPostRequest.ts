interface RequestPostData {
  id: number;
  title: string;
  content: string;
}

export async function patchPostRequest({id, title, content}: RequestPostData) {
  const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content
    })
  });

  return response.status;
}