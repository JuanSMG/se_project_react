const tokenKey = "jwt";

export const setToken = (token) => localStorage.setItem(tokenKey, token);

export const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export const removeToken = () => {
  return localStorage.removeItem(tokenKey);
};
