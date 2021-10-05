const express = require('express')
const path=require('path')
const app = express() 
const con = require("./config/db");

con.on('open', () => {
    console.log('connected...')
})
const static_path=path.join(__dirname,'public');
const static_path2=path.join(__dirname,'routes');
const static_path3=path.join(__dirname,'views');
app.use(express.static(static_path))
app.use(express.static(static_path2))
app.use(express.static(static_path3))

app.use(express.json())
app.use(express.urlencoded())
console.log(path.join(__dirname));
app.set('view engine', 'ejs');
const userRouter = require('./routes/users')
app.use('/users',userRouter)
// PORT
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log('Server started')
})