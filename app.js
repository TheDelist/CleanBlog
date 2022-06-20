const express=require('express');
const app = express();

app.get('/',(req,res)=>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog)
})

const port =4000;
app.listen(port,()=>{
    console.log(`server starting this port ${port}`)
})