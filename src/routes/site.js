const express=require('express')
const router=express.Router()


const siteController =require('../app/controllers/SiteController')

console.log("dasdadsada PATH is "+router.get('views'))

router.use('/search',siteController.search)
router.use('/',siteController.index)

module.exports =router;
