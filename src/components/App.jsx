import React, { useState } from "react";
import Heading from "./Heading";
import Notes from "./Notes";
import Foot from "./Foot";
import list from "./noteList";
import Input from "./Input";

function App() {
  let foo = list;

  if (localStorage.getItem("arrList") === null) {
    let fooString = JSON.stringify(foo);
    localStorage.setItem("arrList", fooString);
  } else {
    foo = JSON.parse(localStorage.getItem("arrList"));
  }

  const [noteList, setNoteList] = useState(foo);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleDelete = (index) => {
    setNoteList((prevList) => {
      localStorage.setItem(
        "arrList",
        JSON.stringify(prevList.filter((item, idx) => idx !== index))
      );
      return prevList.filter((item, idx) => idx !== index);
    });
  };

  const handleChange = (name, val) =>
    setNewNote((prev) => ({ ...prev, [name]: val }));

  const handleAdd = () => {
    setNoteList((prevList) => {
      localStorage.setItem("arrList", JSON.stringify([...prevList, newNote]));
      return [...prevList, newNote];
    });
    setNewNote({ title: "", content: "" });
  };

  const handleEdit = (index) => {
    setNewNote({
      title: noteList[index].title,
      content: noteList[index].content,
    });
    handleDelete(index);
  };

  return (
    <div>
      <Heading />
      <Input current={newNote} changeFunc={handleChange} addFunc={handleAdd} />
      <div className="flexContainer">
        {noteList.map((note, idx) => (
          <Notes
            key={idx}
            id={idx}
            title={note.title}
            content={note.content}
            deleteFunc={handleDelete}
            editFunc={handleEdit}
          />
        ))}
      </div>
      <Foot />
    </div>
  );
}

export default App;
