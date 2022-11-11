const express = require("express");
const app = express();


app.get("/api",(req,res)=>{
    res.json({'users':['user1','user2']})
})

app.listen(9000,console.log('listening on port 9000'))
