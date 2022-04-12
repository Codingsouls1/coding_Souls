export const addStudents = (data) => {
  const url = `https://rocky-wave-71489.herokuapp.com/student`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log("data");
      return data.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const allStudents = () => {
  const url = `https://rocky-wave-71489.herokuapp.com/student`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
