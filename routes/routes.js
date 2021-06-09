const fs = require("fs"); 
const path = require("path"); 



module.exports = (app) => {

    fs.readFile("db/db.json", "utf8", (data) => {

        let notes = JSON.parse(data); 

        app.get("/api/notes", (req, res) => res.json(notes));
        app.get("/api/notes/:id", (req, res) => res.json(notes[req.params.id])); 


        app.post("/api/notes", (req, res) => {
            let newNote = req.body; 
            notes.push(newNote); 
            updateDb(); 
            return(`Added new note: ${newNote.title}`);
        });

        app.delete("/api/notes/:id", (req, res) => {
            notes.splice(req.params.id, 1); 
            updateDb(); 
            console.log(`Deleted noted with id: ${req.params.id}`);
        });

        //~~~~~HTML~Routes~~~~~

        app.get("./notes", (req, res) => {res.sendFile(path.join(__dirname, "../public/notes.html"))}); 
        app.get("*", (req, res) => {res.sendFile(path.join(__dirname, "../public/index.html"))}); 

        const updateDb = () => {
            fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
                if(err) {return console.log("Ahhhhhh :", error)}; 
                console.log("Voila!"); 
            })
        }
    })

    
}