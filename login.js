function login(username, password) {
  if (username && password) {
    return "Login successfu!l";
  }
  return "Invalid credentials";
}

module.exports = login;