export const createAllEvents = (data) => {
  console.log("data", data);
  const url = `https://rocky-wave-71489.herokuapp.com/event`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getAllEvents = () => {
  const url = `https://rocky-wave-71489.herokuapp.com/event`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      //   console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const editAllEvents = (eventId, alldata) => {
  const url = `https://rocky-wave-71489.herokuapp.com/event/${eventId}`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alldata),
  })
    .then((data) => {
      //   console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteAllEvents = (eventId) => {
  const url = `https://rocky-wave-71489.herokuapp.com/event/${eventId}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      //   console.log("data", data);
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
