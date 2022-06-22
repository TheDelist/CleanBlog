const express=require('express');
const mongoose =require('mongoose');
const Post=require('./models/Post');
const methodOverride = require('method-override');

let ejs = require('ejs');
const postController = require('./controllers/postController');
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db');
//middleware
app.set("view engine","ejs");
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    methodOverride('_method', {
      methods: ['POST', 'GET'],
    })
  );
app.get('/',postController.getAllPosts);
app.get('/addpost',async(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'temp/index.html'));
    res.render('addpost')
  
});
app.get('/posts/:id',postController.getPost);
app.post('/posts',postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('posts/:id',postController.deletePost);

const port =process.env.PORT ||5000;
app.listen(port,()=>{
    console.log(`server starting this port ${port}`)
})