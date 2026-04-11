const login = require('../login');
const closeNav = require('../nav');
const validateForm = require('../form');
const loadDashboard = require('../dashboard');

test('login success', () => {
    expect(login('admin', '1234')).toBe('Login successful');
});

test('login fail', () => {
    expect(login('user', 'wrong')).toBe('Invalid credentials');
});

test('login empty', () => {
    expect(login('', '')).toBe('Username and password required');
});

test('close nav', () => {
    expect(closeNav()).toBe('Navigation closed successfully');
});

test('validate form success', () => {
    expect(validateForm(['a', 'b'])).toBe(true);
});

test('validate form fail', () => {
    expect(validateForm(['a', ''])).toBe(false);
});

test('dashboard load', () => {
    expect(loadDashboard('Ahmad')).toBe('Welcome to your dashboard, Ahmad!');
});

test('dashboard no user', () => {
    expect(loadDashboard()).toBe('No user provided');
});