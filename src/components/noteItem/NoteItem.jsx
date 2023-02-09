import { useContext } from "react";
import { ApplicationCtx } from "@/store/state";
import style from "./style.module.scss";

const NoteItem = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = () => {
    dispatch({ type: "DELETE_NOTE", payload: data.id });
  };

  return (
    <div className={style.NoteItem}>
      <h3>{data.title}</h3>
      <p>{data.content}</p>
      <button onClick={onHandleClick}>X</button>
    </div>
  );
};

export default NoteItem;
