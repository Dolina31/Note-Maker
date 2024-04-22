const NoteModel = require("../models/note.model");

module.exports.getNotes = async (req, res) => {
  const notes = await NoteModel.find();
  res.status(200).json(notes);
};

module.exports.setNotes = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Merci d'ajouter une note" });
  }

  const note = await NoteModel.create({
    text: req.body.text,
    title: req.body.title,
  });
  res.status(200).json(note);
};

module.exports.editNotes = async (req, res) => {
  const note = await NoteModel.findById(req.params.id);

  if (!note) {
    res.status(400).json({ message: "cette note n'existe pas" });
  }

  const updateNote = await NoteModel.findByIdAndUpdate(note, req.body, {
    new: true,
  });

  res.status(200).json(updateNote);
};

module.exports.deleteNotes = async (req, res) => {
  const note = await NoteModel.findByIdAndDelete(req.params.id);

  if (!note) {
    res.status(400).json({ message: "Cette note n'existe pas" });
  } else {
    res.status(200).json({ message: "Note supprimée !" });
  }
};
