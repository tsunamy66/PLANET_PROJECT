const express = require("express");
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')
const path = require('path')
const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views')) 
app.set("PORT", process.env.PORT || 3000);
// const PORT = 3000;

app.use(function (req, res, next) {
  let start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method},req.baseUrl=${req.baseUrl} req.url=${req.url}<:=:>${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERY Clever',
    caption: 'This is a caption'
  })
})
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

// app.listen(PORT, () => {
//   console.log(`:Listening on ${PORT}...... :)`);
// });
app.listen(app.get("PORT"), () => {
  console.log(`Server is running on port ${app.get("PORT")}`);
});



