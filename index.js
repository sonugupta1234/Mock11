const express=require("express")

const app=express()
const connection=require("./Config/db")
const routes=require("./Routes/user.routes")
const bookroute=require("./Routes/book.routes")

app.use(express.json())
app.use(routes)
app.use(bookroute)
// app.use(user)

app.listen(7780,()=>{
    connection()
    console.log("Server Running")
})

module.exports=app


