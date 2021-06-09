const express = require("express"); 

const app = express(); 
const port = process.env.port || 1414; 

app.use(express.urlencoded({ extended:true })); 
app.use(express.json()); 
app.use(express.static(__dirname)); 

require("./routes/routes.js")(app); 

app.listen(port, () => {
    console.log(`App listening on port: ${port}`); 
}); 