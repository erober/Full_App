const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("getting")
})


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>
{
    console.log("Server listening on : ",PORT)
})