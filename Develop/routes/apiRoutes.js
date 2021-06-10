const db = require("../db/db.json"); 

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(db));
    app.get("/api/notes/:id", (req, res) => res.json(db[req.params.id])); 


    app.post("/api/notes", (req, res) => {
        let newNote = req.body; 
        db.push(newNote); 
        updateDb(); 
        return(`Added new note: ${newNote.title}`);
    });

    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1); 
        updateDb(); 
        console.log(`Deleted noted with id: ${req.params.id}`);
    });

    const updateDb = () => {
        fs.writeFile(db, JSON.stringify(db, "\t"), err => {
            if(err) {console.log("Ahhhhhh :", err)}; 
            console.log("Voila!"); 
        })
    }
}