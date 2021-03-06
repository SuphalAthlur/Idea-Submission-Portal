const Post = require('../models/post');

const post_index = (req, res) => {
  Post.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { posts: result, title: 'All posts' });
    })
    .catch(err => {
      console.log(err);
    });
}

const post_details = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then(result => {
      res.render('details', { post: result, title: 'Post Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Post not found' });
    });
}

const post_create_get = (req, res) => {
  res.render('create', { title: 'Create a new post' });
}

const post_create_post = (req, res) => {
  const post = new Post(req.body);
  post.save()
    .then(result => {
      res.redirect('/posts');
    })
    .catch(err => {
      console.log(err);
    });
}

const post_delete = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/posts' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  post_index, 
  post_details, 
  post_create_get, 
  post_create_post, 
  post_delete
}