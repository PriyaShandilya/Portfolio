const express = require("express");
const app = express();
const port = 8080;
app.listen(port, ()=>{
    console.log(`port is listening on port ${port}`)
});

app.use(express.static("public"))
app.use(express.static("public/image"))
app.set("view engine", "ejs");
app.get("/index",(req, res)=>{
   res.render("index.ejs")
})

app.use((req,res)=>{
    res.send("Path does not exist on server.")
});


