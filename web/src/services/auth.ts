export const  TOKEN_KEY = "bookcase-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token: any) => {
  localStorage.setItem(TOKEN_KEY, token);
};