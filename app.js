const express=require('express');
const mongoose =require('mongoose');
const Post=require('./models/Post');
let ejs = require('ejs');
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
//middleware
app.set("view engine","ejs");
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',async (req,res)=>{
    //const blog = { id: 1, title: "Blog title", description: "Blog description" }
   // res.send(blog)
   const posts=await Post.find({});
   res.render('index',{
    posts
   });
});
app.get('/addpost',async(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'temp/index.html'));
    res.render('addpost')
  
});
app.post('/posts',async (req,res)=>{
    //const blog = { id: 1, title: "Blog title", description: "Blog description" }
   // res.send(blog)
   await Post.create(req.body)
   res.redirect('/')
});

const port =4000;
app.listen(port,()=>{
    console.log(`server starting this port ${port}`)
})