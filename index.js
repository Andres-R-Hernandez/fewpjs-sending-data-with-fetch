const usersURL = "http://localhost:3000/users"

function submitData(name, email) {
  const data = {
    name: name,
    email: email
  }

  const reqPack = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }

  return fetch(usersURL, reqPack)
    .then(resp => resp.json())
    .then(data => renderID(data))
    .catch(error => renderError(error))
}

function renderID(data) {
  document.querySelector("body").innerHTML = data["id"]
}

function renderError(error) {
  document.querySelector("body").innerHTML = error.message
}

submitData("john", "emailz")
