export const BASE_URL = "https://api.beagle-elgaeb.nomoredomains.work";

const jsonHeaders = {
  "Content-Type": "application/json",
};

export function getInitialCards() {
  return fetch(`${BASE_URL}/cards`, {}).then(handleResult);
}

export function getProfileData() {
  return fetch(`${BASE_URL}/users/me`, {}).then(handleResult);
}

export function setAvatar(avatar) {
  return fetch(`${BASE_URL}/users/me/avatar`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(handleResult);
}

export function setProfileData(name, about) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify({
      name,
      about,
    }),
  }).then(handleResult);
}

export function createCard(name, link) {
  return fetch(`${BASE_URL}/cards`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({
      name,
      link,
    }),
  }).then(handleResult);
}

export function removeCard(id) {
  return fetch(`${BASE_URL}/cards/${id}`, {
    method: "DELETE",
  }).then(handleResult);
}

export function likeCard(id) {
  return fetch(`${BASE_URL}/cards/likes/${id}`, {
    method: "PUT",
    headers: jsonHeaders,
  }).then(handleResult);
}

export function unlikeCard(id) {
  return fetch(`${BASE_URL}/cards/likes/${id}`, {
    method: "DELETE",
    headers: jsonHeaders,
  }).then(handleResult);
}

function handleResult(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Статут ошибки: ${res.status}`);
}
