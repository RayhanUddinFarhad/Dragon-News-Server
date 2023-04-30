const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000
const category = require('./category.json')
const news = require('./news.json')


app.use(cors());




app.get('/', (req, res) => {
  res.send('Hello World! I am running')
})

app.get('/category', (req, res) => {
  res.send(category)



})

app.get('/category/:id', (req, res) => {

  const id = parseInt (req.params.id);


  if (id === 0) {

    res.send (news)
  }


  else {

    const categoryNews = news.filter(n => parseInt(n.category_id) === id);

  res.send(categoryNews)

  }


})

app.get('/news', (req, res) => {


  res.send(news)
})

app.get('/news/:id', (req, res) => {

  const id = req.params.id;

  const catNews = news.find(n => n._id === id);


  res.send(catNews)





})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})