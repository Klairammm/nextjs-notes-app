import style from "./style.module.scss";
import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store/state";

function AddNote() {
  const { dispatch } = useContext(ApplicationCtx);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={style.AddNote}>
      <h2>Add Note</h2>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Note title"
          autoComplete="off"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Note content"
          autoComplete="off"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          required
        />
        <input type="submit" value="Add Note" className={style.btn} />
      </form>
    </div>
  );
}

export default AddNote;
