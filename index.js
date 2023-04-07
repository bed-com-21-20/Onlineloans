const express = require('express')
const app = express()

const post = require("./SRC/posts/post.model")

app.get('/api/v1',function(req,res){

    return res.json(req)
})

app.get('/api/v1', function(req, res){
return res.json([post])
    
})

app.listen(3000, function (){

    console.log('ONLINE_LOANS listen on port 3000')
})

