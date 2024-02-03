const express = require("express");
const homeRoute = require('./routes/home.js');
const notes = require('./routes/notes.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/', homeRoute);
app.use('/notes', notes)


app.listen(PORT, () => {
  console.log(`Server is listening inhttp://localhost:${PORT} 🚀`);
});
