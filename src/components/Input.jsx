import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

export default function Input(props) {
  const { current, changeFunc, addFunc } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="input-container">
      <input
        name="title"
        type="text"
        placeholder="Add New Note"
        className="title-input"
        autoComplete="off"
        value={current.title}
        onChange={(event) => changeFunc(event.target.name, event.target.value)}
        style={{ borderRadius: show ? "10px 10px 0 0" : "10px 10px 10px 10px" }}
        onClick={() => setShow(true)}
      />
      <textarea
        name="content"
        maxLength="200"
        placeholder="Content"
        rows="5"
        className="content-input"
        value={current.content}
        onChange={(event) => changeFunc(event.target.name, event.target.value)}
        style={{ display: show ? "block" : "none" }}
      />
      <AddIcon
        className="buttonWrap-add"
        onClick={addFunc}
        style={{ display: show ? "block" : "none" }}
      />
    </div>
  );
}
