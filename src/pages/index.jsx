import AddNote from "@/components/addNote/AddNote";
import Navbar from "@/components/navbar/Navbar";
import style from "@/styles/Home.module.scss";
import NoteContent from "@/components/noteContent/NoteContent";

import { ApplicationCtx } from "@/store/state";
import { useReducer } from "react";
import { initialState } from "@/store/state";
import { globalReducer } from "@/store/reducers";

export default function Home() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={style.Home}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        <Navbar />
        <div className={style.container}>
          <AddNote />
          <NoteContent />
        </div>
      </ApplicationCtx.Provider>
    </div>
  );
}
