const db = require("../db/db.json"); 
const fs = require("fs");


module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        return res.json(); 
    });

    app.post("/api/notes", (req, res) => {
        fs.readFile("db/db.json", "utf8", (err, data) => {
        let currentNote = req.body; 
        console.log("newNOtessss", currentNote)

        let notes = JSON.parse(data); 
        let notesArr = []; 
        console.log("notesssss", notes);
        notesArr.push(currentNote); 
        console.log("notesArr", notesArr); 
        notesArr.push(notes); 
        console.log("notesArr", notesArr); 

        updateDb(notesArr); 
        })
    });

    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1); 
        updateDb(); 
        console.log(`Deleted noted with id: ${req.params.id}`); 
    });
}

const updateDb = (currentNote) => {
    fs.writeFile("./db/db.json", JSON.stringify(currentNote), (err) => {
        if (err) {console.log("Ahhhhhh :", err)}; 
        console.log("Voila!"); 
        return true; 
    })
}