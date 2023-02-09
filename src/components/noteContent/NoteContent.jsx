import { useContext } from "react";
import { ApplicationCtx } from "@/store/state";
import NoteList from "../noteList/NoteList";
import style from "./style.module.scss";

const NoteContent = () => {
  const { dispatch } = useContext(ApplicationCtx);

  //   const onHandleSearch = (e) => {
  //     dispatch({ type: "ON_SEARCH_NOTE", payload: e.target.value });
  //   };

  return (
    <div className={style.NoteContent}>
      <h2>Search Notes</h2>
      <input
        // onInput={onHandleSearch}
        type="text"
        id="search"
        name="search"
        placeholder="Search..."
      />
      <NoteList />
    </div>
  );
};

export default NoteContent;
