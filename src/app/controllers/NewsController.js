
class NewsController{
    index(req,res){
       
         //res.render('news');
        res.render('news')
    }

    show(req,res){
        res.send('news page')
    }
}

module.exports=new NewsController


