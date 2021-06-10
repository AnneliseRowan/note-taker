const db = require("../db/db.json"); 
const fs = require("fs");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(db));
    app.get("/api/notes/:id", (req, res) => res.json(db[req.params.id])); 


    app.post("/api/notes", (req, res) => {
        updateDb(req.body); 
        return(`Added new note: ${req.body.title}`);
    });

    app.delete("/api/notes/:id", (req, res) => {
        db.splice(req.params.id, 1); 
        updateDb(); 
        console.log(`Deleted noted with id: ${req.params.id}`);
    });

    const updateDb = (newNote) => {
        // fs.readFile("db/db.json", "utf8", (data) => {
            
        // })
        fs.writeFile("../db/db.json", JSON.stringify(newNote, "\t"), err => {
            if(err) {console.log("Ahhhhhh :", err)}; 
            console.log("Voila!"); 
        })
    }
}