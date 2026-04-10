function login(username, password) {
  if (username && password) {
    return "Login successful!";
  }
  return "Invalid credentials";
}

module.exports = login;
