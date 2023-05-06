const express=require("express")

const bookroute=express.Router()

const bookModel=require("../Model/book.model")
const authenticate=require("../Middlewares/authentication.middlewares")


bookroute.post("/books",async(req,res)=>{

    const {title,author,price,category,quantity}=req.body

    try {
        const book=await bookModel({title,author,price,category,quantity})
        await book.save()
        res.status(201).send("Books Added")
    } catch (error) {
        console.log(error.message)
    }
})

bookroute.get("/books/:id",async(req,res)=>{

    const {id}=req.params

    try {
        const book=await bookModel.findById({_id: id})
        res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
    }
})


bookroute.get("/books",async(req,res)=>{

    const {category}=req.query

    try {
        const book=await bookModel.findOne({category})
        res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
    }
})


bookroute.get("/books",async(req,res)=>{

    const {category,author}=req.query

    try {
        const book=await bookModel.find({category,author})
        res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
    }
})



bookroute.patch("/books/:id",async(req,res)=>{

    const {id}=req.params

    const {author}=req.body

    try {
        const book=await bookModel.findByIdAndUpdate({_id: id, author: author})
        res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
    }
})



bookroute.delete("/books/:id",async(req,res)=>{

    const {id}=req.params


    try {
        const book=await bookModel.findByIdAndDelete({_id: id})
        res.status(200).send("Deleted Sucessfully")
    } catch (error) {
        console.log(error.message)
    }
})


module.exports=bookroute