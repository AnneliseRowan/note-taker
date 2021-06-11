const db = require("../db/db.json"); 
const fs = require("fs");


module.exports = (app) => {

    fs.readFile("./db/db.json", "utf8", (data) => {
        let notes = JSON.parse(data); 

        app.get("/api/notes", (req, res) => {
            res.json(notes)
        });
    
    
        app.post("/api/notes", (req, res) => {
            let newNote = req.body; 
            updateDb(newNote); 
            return console.log(`Added new notes: ${newNote}`)        
    
        });
    
        app.delete("/api/notes/:id", (req, res) => {
    
            notes.splice(req.params.id, 1); 
            updateDb(); 
            console.log(`Deleted noted with id: ${req.params.id}`); 
            
        });
    
        const updateDb = (newNote) => {
    
            fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
                if (err) {console.log("Ahhhhhh :", err)}; 
                console.log("Voila!"); 
                return true; 
            })
    
        }
    })
}