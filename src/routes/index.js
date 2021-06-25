const newsRouter =require('./news')
const siteRouter =require('./site')
const path=require('path')

function route(app){

    
   // app.use('/news',newsRouter)
    app.use('/',siteRouter)
    console.log("ong lee path"+app.get('views'))
//    app.get('/',(req,res)=>{
//        res.render("home")
//    })

}

module.exports=route