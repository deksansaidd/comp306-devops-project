function login(username, password) {
    if (!username || !password) {
        return "Username and password required";
    }

    if (username === "admin" && password === "1234") {
        return "Login successful";
    }

    return "Invalid credentials";
}

module.exports = login;