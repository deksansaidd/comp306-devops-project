function loadDashboard(user) {
    if (!user) return "No user provided";

    return `Welcome to your dashboard, ${user}!`;
}

module.exports = loadDashboard;