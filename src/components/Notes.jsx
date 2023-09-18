import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Notes(props) {
  const { title, content, deleteFunc, editFunc, id } = props;

  return (
    <div className="noteBox">
      <h3 className="noteTitle">{title}</h3>
      <p className="noteContent">{content}</p>
      <DeleteIcon
        className="buttonWrap-delete"
        onClick={() => deleteFunc(id)}
      />
      <EditIcon className="buttonWrap-edit" onClick={() => editFunc(id)} />
    </div>
  );
}

export default Notes;
