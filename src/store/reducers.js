import { ADD_NOTE, DELETE_NOTE } from "./actions";

//il reducer è una funzione che all'atto della definizione prende due parametri: state, action
//il dispatch si serve di questo oggetto fittizio fatto di action.type e payload
const globalReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { globalReducer };
