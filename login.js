function login(username, password) {
  if (username && password) {
    return "The Is Login successful";
  }
  return "Invalid credentials";
}

module.exports = login;