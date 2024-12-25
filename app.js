const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url == '/about'){
        res.end('The about Page')
    }

    if(req.url == '/profile'){
        res.end('The profile Page')
    }

    if(req.url == '/'){
        res.end('The Home page is here')
    }
    
})

server.listen(3000)