const notes = require("express").Router();

const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helper/fsUtils");
const uuid = require("../helper/uuid");


notes.get('/notes', (req,res) => {
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/notes', (req,res) => {
  const { title, text } = req.body;
  const newNote = {title,text,id:uuid()};
  return res.json(readAndAppend(newNote, './db/db.json'));
});





module.exports = notes;
