const express=require('express');
let ejs = require('ejs');
const app = express();

//middleware
app.use(express.static('public'))
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    //const blog = { id: 1, title: "Blog title", description: "Blog description" }
   // res.send(blog)
   res.render('index');
})

const port =4000;
app.listen(port,()=>{
    console.log(`server starting this port ${port}`)
})