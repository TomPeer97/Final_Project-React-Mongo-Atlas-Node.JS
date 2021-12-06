let baseUrl = "http://localhost:3000";

//simple/business registration function
export function registerNewAccount(data, callback) {
  let url = baseUrl + "/api/users";
  let obj = getConfigurationForPostRequest(data);

  fetch(url, obj)
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

//user login function
export function LoginUser(data, callback) {
  let url = baseUrl + "/api/auth";
  let obj = getConfigurationForPostRequest(data);
  fetch(url, obj)
    .then((x) => {
      return x.json();
    })
    .then((x) => {
      callback(x);
    })
    .catch((x) => {
      callback(x);
    });
}

//give to the user token (after registration)
export function getMeData(token, callback) {
  if (!token) return;
  let url = baseUrl + "/api/users/me";
  fetch(url, { headers: { "x-auth-token": token } })
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

//show the card im my-card page
export function getMeCards(token, callback) {
  let cardToken = { headers: { "x-auth-token": token } };
  let url = baseUrl + "/api/users/mecards";
  fetch(url, cardToken)
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

export function getMeAllCards(token, callback) {
  let cardToken = { headers: { "x-auth-token": token } };
  let url = baseUrl + "/api/cards/";
  fetch(url, cardToken)
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

export function insertNewCard(data, token, callback) {
  let url = baseUrl + "/api/cards";
  let obj = getConfigurationForPostRequest(data);
  obj.headers["x-auth-token"] = token;

  fetch(url, obj)
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

export function deleteCard(idToDelete, token, callback) {
  let url = baseUrl + "/api/cards/" + idToDelete;
  fetch(url, { method: "DELETE", headers: { "x-auth-token": token } })
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

export function editCard(updatedCard, cardId, token, callback) {
  let url = baseUrl + "/api/cards/" + cardId;

  let cardToUpdate = {
    bizName: updatedCard.bizName,
    bizDescription: updatedCard.bizDescription,
    bizAddress: updatedCard.bizAddress,
    bizPhone: updatedCard.bizPhone,
  };

  fetch(url, {
    body: JSON.stringify(cardToUpdate),
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  })
    .then((x) => x.json())
    .then((x) => callback(x))
    .catch((x) => callback(x));
}

export function addContact(data) {
  let url = baseUrl + "/api/contacts";
  let obj = getConfigurationForPostRequest(data);
  fetch(url, obj)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

//create the post request for the user at server side
function getConfigurationForPostRequest(data) {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };
}
