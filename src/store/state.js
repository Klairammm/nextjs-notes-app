import { createContext } from "react";

const initialState = {
  noteList: [
    {
      id: 1,
      title: "oggi piango",
      content: "devo preparare due esami e pensare al final project",
    },
    {
      id: 2,
      title: "scrivere alla prof",
      content: "pregare tutti i santi affinchè non si indisponga",
    },
  ],
  // user: {
  //   username: localStorage.getItem("Note-app-username"),
  // },
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
