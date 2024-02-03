const notes = require("express").Router();
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helper/fsUtils");
const uuid = require("../helper/uuid");

notes.get("/", (req, res) => {
  readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
        title,
        text,
        note_id: uuid(),
    };
    readAndAppend(newNote, '../db/db.json');
    res.json('Note added successfully');
  } else {
    res.errored('Error adding note')
  }
});

module.exports = notes;
