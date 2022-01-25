// console.log('test');

// const message = (name) => {
//     console.log(
//         `${name} is good`
//     )
// }

// message('woo')

// global/window <<

// console.log(global)

// setTimeout(()=> {
//     console.log('woo')
// }, 3000)

// directory and filename << 

// console.log(__dirname);
// console.log(__filename);

// import stuff from same directory << 

// const importedStuff = require('./users')
// console.log(importedStuff)
// console.log(importedStuff.numbers)

// const {users, numbers} = require('./users')
// console.log(numbers)

const fs = require('fs')
// read file
// fs.readFile('node.txt', (err,data) =>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })
// // write file
// fs.writeFile('node.txt', 'fixed shit', (err,data) =>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('data.toString()')
//     }
// })
// // append
// fs.appendFile('node.txt', 'fixed shit2\r\n', (err,data) =>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('data.toString()')
//     }
// })
// fs.appendFile('node.txt', 'fixed shitee2\r\n', (err,data) =>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('data.toString()')
//     }
// })
// // mkdir
// if(!fs.existsSync
//     ('node')){
//         fs.mkdir('node', (err,data) =>{
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log('a new folder')
//             }
//         })
//     }
//     else {
//         console.log('folder exists')
//     }
// // delte
// if(fs.existsSync
//     ('node')){
//         fs.rmdir('node', (err,data) =>{
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log('a fucking dead folder')
//             }
//         })
//     }
//     else {
//         console.log('no folder exists')
//     }
// // delte file
// if(fs.existsSync
//     ('node.txt')){
//         fs.unlink('node.txt', (err,data) =>{
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log('a fucking dead file')
//             }
//         })
//     }
//     else {
//         console.log('no file exists')
//     }

const readStream = fs.createReadStream('output-onlinefiletools.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('writeStream.txt')
// readStream.on('data', chunk=>{
//     console.log('#### new chunk ####')
//     console.log(chunk)

//     writeStream.write('\n new chunk ### \n')
//     writeStream.write(chunk)
// })
readStream.pipe(writeStream)