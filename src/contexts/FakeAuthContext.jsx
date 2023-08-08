/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
const AuthContext = createContext();
export function useAuth() {
  if (useContext(AuthContext) === undefined)
    throw new Error("AuthContext was used outside the Cities Provider");
  return useContext(AuthContext);
}

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action type");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      alert("Email or Password doesn't match");
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  const value = { user, isAuthenticated, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
