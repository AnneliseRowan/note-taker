const db = require("../db/db.json"); 
const fs = require("fs");
const router = require("router"); 

 

module.exports = (app) => {

    fs.readFile("db/db.json", "utf8", (err, data) => {

        console.log("dataaaaaaaa", data); 

        let notes = JSON.parse(data); //always equalling null
        console.log("notesssss", notes); 

        app.get("/api/notes", (req, res) => {
            res.json(notes);
        });

        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]); 
        })
    
        app.post("/api/notes", (req, res) => {
            let currentNote = req.body; 
            console.log("newNOtessss", currentNote)
            notes.push(currentNote); 
            updateDb(currentNote); 
            return console.log(`Added new notes: ${currentNote}`)        
    
        });
    
        app.delete("/api/notes/:id", (req, res) => {
    
            notes.splice(req.params.id, 1); 
            updateDb(); 
            console.log(`Deleted noted with id: ${req.params.id}`); 
            
        });
        
        const updateDb = (currentNote) => {
            fs.writeFile("./db/db.json", JSON.stringify(currentNote), (err) => {
                if (err) {console.log("Ahhhhhh :", err)}; 
                console.log("Voila!"); 
                return true; 
            })
        }
        

    })
}