const baseUrl = "http://localhost:3001";

const headers = {
    "Content-Type": "application/json",
};

const handleServerResponce = (res) => {
    return res.ok ? res.json () : Promise.reject(`Error: ${res.status}`);
}

export const getItems = () =>
  fetch(`${baseUrl}/items`, { headers }).then(handleServerResponce);


export const addItem = ({ name, imageUrl, weather }) => {
    return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    }).then(handleServerResponce);
    };


export const deleteItem = (itemId) => {
    return fetch(`${baseUrl}/items/${itemId}`, {
      method: "DELETE",
      headers,
    }).then(handleServerResponce);
  };