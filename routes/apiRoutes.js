const db = require("../db/db.json"); 
const fs = require("fs");
const { v4: uuidv4 } = require('uuid'); 
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        return res.json(db); 
    });

    app.post("/api/notes", (req, res) => {
        let currentNote = req.body; 
        currentNote.id = uuidv4(); 
        db.push(currentNote); 
        updateDb(db); 
        res.json(db); 
    });

    app.delete("/api/notes/:id", (req, res) => {
        let deleteId = req.params.id;

        for(let i = 0; i < db.length; i++) {
            if(db[i].id === deleteId) {
                db.splice(i, 1)
            }
        }; 
        writeFileAsync('./db/db.json', JSON.stringify(db), (err) => err ? console.error(err) : console.log('note deleted! New notes: ', db)).then(() => { res.json(db)}) 
    });
}

const updateDb = (notes) => {
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {console.log("Ahhhhhh :", err)}; 
        console.log("Voila!"); 
        return true; 
    })
}