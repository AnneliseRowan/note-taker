const express = require("express"); 

const app = express(); 
const port = process.env.port || 3030; 

app.use(express.urlencoded({ extended:true })); 
app.use(express.json()); 
app.use(express.static("./public")); 


require("./routes/apiRoutes")(app); 
require("./routes/htmlRoutes")(app); 


app.listen(process.env.port || 3030, () => {
    console.log(`App listening on port: ${port}`); 
}); 