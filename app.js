const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const morgan = require('morgan');
const app = express();


const dbURI = "mongodb+srv://suphal_athlur:simplisticpassword@cluster0.jizovm2.mongodb.net/idea-submission?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then (result => {
    app.listen(3000, 'localhost', () => console.log("Connected"));
  })
  .catch (err => console.log("Ulalalala"));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.use('/posts', postRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});