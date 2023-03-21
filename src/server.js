//const express=require('express')
import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const app=express()
// import productRouter from './controller/products.js'
// import addRouter from './controller/add.js'
// import updateRouter from './controller/update.js'
// import deleteRouter from './controller/delete.js'
// import fileRouter from './controller/image.js'
import productRouter from "./router/products.js"
import addRouter from './router/add.js'
import updateRouter from './router/update.js'
import deleteRouter from './router/delete.js'
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Static file
app.use(express.static("src/public"))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())
app.use('/',productRouter)
app.use('/',addRouter)
app.use('/',updateRouter)
app.use('/',deleteRouter)
// app.use('/upload',fileRouter)

app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "views/home.html"), "utf-8")
    res.send(html)
    res.end()
})
app.listen(8000,()=>{
    console.log(`http://localhost:8000/`);
})