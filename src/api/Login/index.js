export const adminLogin = (data) => {
  const url = `https://rocky-wave-71489.herokuapp.com/login`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
