const Token_Key = "jwt";

export const setToken = (token) => localStorage.setItem(Token_Key, token);

export const getToken = () => {
  return localStorage.getItem(Token_Key);
};

export const removeToken = () => {
  return localStorage.removeItem(Token_Key);
};
