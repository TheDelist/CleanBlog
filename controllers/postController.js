const Post = require('../models/Post');

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id:req.params.id});
  post.title = req.body.title;
  post.detail = req.body.detail;
  await post.save();
  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (res, req) => {
  await Post.findByIdAndRemove(req.body.id);
  res.redirect('/');
};
exports.getPost = async (req, res) => {
  //const blog = { id: 1, title: "Blog title", description: "Blog description" }
  // res.send(blog)
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
  // res.redirect('/')
};

exports.createPost = async (req, res) => {
  //const blog = { id: 1, title: "Blog title", description: "Blog description" }
  // res.send(blog)
  await Post.create(req.body);
  res.redirect('/');
};
exports.getAllPosts=async (req,res)=>{
    const posts=await Post.find({});
    res.render('index',{
     posts
    });
 };
