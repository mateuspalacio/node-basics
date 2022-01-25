const http = require('http')
const fs = require('fs')
const moment = require('moment')

const port = 3000;
const hostname = 'localhost'

const christnas = '2022-12-25'
console.log(moment(christnas).format('LL'))

const sercer = http.createServer((req,res) => {
    let route = "./view/"

    // console.log("a req is made", req.url)
    // console.log('req method', req.method)
    res.setHeader('Content-Type', 'text/html')
    switch(req.url){
        case '/':
            route+= 'index.html';
            res.statusCode = 200
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200
            break;
        case '/contact-us':
            route += 'contact.html';
            res.statusCode = 200
            break;
        default:
            route += '404.html';
            res.statusCode = 404
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