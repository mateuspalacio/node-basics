const http = require('http')
const fs = require('fs')
const port = 3000;
const hostname = 'localhost'



const sercer = http.createServer((req,res) => {
    let route = "./view/"

    // console.log("a req is made", req.url)
    // console.log('req method', req.method)
    res.setHeader('Content-Type', 'text/html')
    switch(req.url){
        case '/':
            route+= 'index.html';
            break;
        case '/contact':
            route += 'contact.html';
            break;
        default:
            route += '404.html';
            break;
    }
    
    fs.readFile(route, (err,data)=>{
        if(err){
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end() // can send data here
        }
    })
})

sercer.listen(port, hostname, ()=>{
    console.log(`listening port ${port}`)
})