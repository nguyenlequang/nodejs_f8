const express = require('express')
const app = express()
const port = 3000
const morgan=require('morgan')
const handlebars=require('express-handlebars')
const path=require('path')
const route =require('./routes/index')
 // import tu /routes/index de xai route nhu 1 function

app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'resources/views')) // n\
console.log('lee path'+app.get('views'))


app.engine('hbs',handlebars({
  extname:'.hbs'
}))
app.set('view engine','hbs')

app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
app.use(morgan('combined'))




//console.log(path.join(__dirname,'resources/views'));
route(app)
// app.get('/' , (req , res)=>{

//    res.render('news')

// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})