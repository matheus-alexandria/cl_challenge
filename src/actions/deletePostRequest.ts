export async function deletePostRequest(id: number) {
  const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
    method: 'DELETE',
  });

  return response.status;
}