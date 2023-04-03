const express = require('express')
const app = express()
const port = 9997

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'skiller'
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/user_account/create', (req, res) => {
  user_id
  email
  name
  authority
  create_date
  modified_date
  connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')
    connection.query('insert into user_account(user_id,email,name,authority,create_date,modified_date) values(?,?,?,?,?,?)', [user_id,email,name,authority,create_date,modified_date], function (err, result) {
      if (err) throw err
    })
  })
})
app.get('/user_account/read', (req, res) => {
  res.send('Hello World!')
  connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')

    connection.query('SELECT * FROM people', function (err, results) {
      if (err) throw err
      console.log(results[0].id)
      console.log(results[0].name)
      console.log(results[0].age)
      console.log(results[0].address)
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})