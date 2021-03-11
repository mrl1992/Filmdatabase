const request = async (url) => {
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const data = await response.json();
  console.log(data);
  return response;
};

export { request };
