const db = require("../db/db.json"); 
const fs = require("fs");
const { v4: uuidv4 } = require('uuid'); 



module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        return res.json(db); 
    });

    app.post("/api/notes", (req, res) => {
        let currentNote = req.body; 
        console.log("current NOtessss", currentNote);

        currentNote.id = uuidv4(); 
        console.log("current note", currentNote); 

        console.log("db", db);
        db.push(currentNote); 
        console.log("after db", db); 

        updateDb(db); 
    });

    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1); 
        updateDb(); 
        console.log(`Deleted noted with id: ${req.params.id}`); 
    });
}

const updateDb = (notes) => {
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {console.log("Ahhhhhh :", err)}; 
        console.log("Voila!"); 
        return true; 
    })
}