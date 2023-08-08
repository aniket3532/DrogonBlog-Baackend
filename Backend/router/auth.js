require('../db/conn');
const Blog = require('../models/blogSchema');
const express = require('express')
// const { getDb } = require('../db/conn')

// init app & middleware
const app = express()
const router = express.Router();
// db connection
// let db

// connectToDb((err) => {
//   if(!err){
//     // app.listen(PORT, () => {
//     //   console.log('app listening on port 3000')
//     // })
//     db = getDb()
//   }
// })

// router.get('/', (req,res) => {
//     res.send(`hello from router home page`);
// })

router.post('/create', async (req,res) => {

    const { title, body, author } = req.body;

    try{
        const blog = new Blog({ title, body, author });
        await blog.save();
        res.status(201).json({message: "Blog created successfuly"});
        console.log('Hua hai')
    }
    catch(err) {
        res.status(500).json({message: err.message});
        console.log('Hua nahi hai')
    }
     
})

router.get('/', async(req, res) => {

   try{
    const blogs = await Blog.find();
    res.status(200).json(blogs);
    console.log(blogs, "gff");
   }
   catch(error){
    res.status(500).json({error: error.message});
    console.log(error, "sgewh")
   }
   
})

router.get('/blogs/:id', async(req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.delete('/blogs/:id', async(req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json("blog deleted successfully");
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

// async function start(){
//     const data = await DB.collection('Blogs').find({}).toArray();
//     console.log(data);
// }
// start();
module.exports = router;