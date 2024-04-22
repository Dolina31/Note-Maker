const express = require("express");
const {
  setNotes,
  getNotes,
  editNotes,
  deleteNotes,
} = require("../controllers/note.controllers");
const router = express.Router();

router.get("/", getNotes);

router.post("/", setNotes);

router.put("/:id", editNotes);

router.delete("/:id", deleteNotes);

module.exports = router;
