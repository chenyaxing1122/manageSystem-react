export function authLogin() {
    return sessionStorage.getItem('token') ? true : false
}