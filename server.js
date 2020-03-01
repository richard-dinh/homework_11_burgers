const express = require('express')
const {join} = require('path')


const app = express()
app.engine('jsx', require('express-react-views').createEngine())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(join(__dirname, 'public')))

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)