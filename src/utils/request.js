const request = async (url) => {
  const config = {
    method: "GET",
  };
  const response = await fetch(url, config);
  const getData = await response.json();
  if (response.ok) {
    console.log(getData);
    return response;
  }
  return Promise.reject(getData);
};

export { request };
