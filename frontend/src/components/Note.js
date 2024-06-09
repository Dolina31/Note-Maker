import React, { useEffect, useState } from "react";

const Note = () => {
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5000/note");
        const data = await response.json();
        setNotesData(data);

        console.log(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des notes :", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="notes-wrapper">
      {notesData.map((note, index) => (
        <div className="note" key={index} onClick={console.log("test")}>
          <h1>{note.title}</h1>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
