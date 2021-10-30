export const BASE_URL = "https://api.beagle-elgaeb.nomoredomains.work";

export function register({ email, password }) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResult);
}

export function authorize({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResult);

}

export function getContent() {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResult);
}

function handleResult(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Статут ошибки: ${res.status}`);
}
