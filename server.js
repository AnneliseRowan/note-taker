const express = require("express"); 

const app = express(); 
const port = process.env.port || 3030; 

app.use(express.urlencoded({ extended:true })); 
app.use(express.json()); 


require("./Develop/routes/apiRoutes.js")(app); 
require("./Develop/routes/htmlRoutes.js")(app); 


app.listen(port, () => {
    console.log(`App listening on port: ${port}`); 
}); 