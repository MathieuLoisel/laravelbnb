export function isLoggedInUtil() {
    return localStorage.getItem("isLoggedIn") == 'true';
}

export function logInUtil() {
    localStorage.setItem("isLoggedIn", true);
}

export function logOutUtil() {
    localStorage.setItem("isLoggedIn", false);
}