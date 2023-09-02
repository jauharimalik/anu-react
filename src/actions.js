import { Action } from "redux";

export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});