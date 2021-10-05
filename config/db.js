const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Users'
mongoose
     .connect( url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
const con = mongoose.connection
module.exports = con;