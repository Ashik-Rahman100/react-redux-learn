import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("Current State", store.getState());
  console.log("Current Action", action);
  next(action);
  console.log("Current State", store.getState());
};

export default logger;
