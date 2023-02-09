import { useContext } from "react";
import NoteItem from "../noteItem/NoteItem";
import style from "./style.module.scss";
import { ApplicationCtx } from "@/store/state";

const NoteList = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={style.NoteList}>
      {state.noteList.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
