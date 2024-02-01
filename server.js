const express = require("express");
const path = require("path");
const api = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // Allow public files
app.use(express.urlencoded({ extended: true }));
// // telling express to use api middleware
app.use("/api", api);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.use((req,res)=>{
  res.status(404).send("404 Not Found")
});

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});
