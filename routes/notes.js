const notes = require('express').Router();
const fs = require('fs')
const path = require('path');
// const db = require('../db/db.json');

notes.get('/api/notes', async (req,res) => {
    try {
        const filePath = path.join(__dirname, "data.json");
        const data = await fs.readFile(filePath, "utf8");
        const jsonData = JSON.parse(data);
        
        const userId = parseInt(req.params.userId);
        const user = jsonData.users.find(user => user.id === userId);
    
        if (user) {
          res.json(user);
        } else {
          res.status(404).send("User not found");
        }
      } catch (error) {
        console.error("Error reading JSON file:", error);
        res.status(500).send("Internal Server Error");
      }
});


module.exports = notes;

