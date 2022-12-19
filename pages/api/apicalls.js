// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const LoginRequest = async ({ email, password }) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
    password: password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  let response = await fetch("https://pay.3334763tfdbf.sbs/sandbox/v1/auth/login/email", requestOptions)
  let result = await response.text()

  return JSON.parse(result)
}

export const UserProfileRequest = async (token) => {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  let response = await fetch("https://pay.3334763tfdbf.sbs/sandbox/v1/user/profile", requestOptions)
  let result = await response.text()

  return JSON.parse(result)
}

export const getUsersRequest = async (has_account, token) => {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  let response = await fetch(`https://pay.3334763tfdbf.sbs/sandbox/v1/user?has_account=${has_account}`, requestOptions)
  let result = await response.text()

  return JSON.parse(result)
}

export const editUsersRequest = async (token, account_number, uuid) => {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
  };

  let response = await fetch(`https://pay.3334763tfdbf.sbs/sandbox/v1/user`, requestOptions)
  let result = await response.text()

  return JSON.parse(result)
}