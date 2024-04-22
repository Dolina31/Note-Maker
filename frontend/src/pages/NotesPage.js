import React from "react";
import Note from "../components/Note";
import Input from "../components/Input";
import Button from "../components/Button";

const NotesPage = () => {
  return (
    <div className="notespage">
      <Note />
      <p>Create a new note</p>
      <form className="newNote-form">
        <Input title="Title" type="text" name="title" />
        <Input title="Text" type="text" name="text" />
        <Input title="Tags" type="text" name="tags" />
        <Button title="Add" className="submit-button" />
      </form>
    </div>
  );
};

export default NotesPage;
