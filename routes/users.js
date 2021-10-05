const express = require('express')
const router = express.Router();
const User = require('../models/user')
const Kyc =require('../models/kyc')
const app = express() 
app.use(express.json())
app.use(express.urlencoded())
router.get('/', async(req,res) => {
    try{
           const users = await User.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/login', async(req,res) => {
    try{
           const users = await User.find({ Email: req.body.email })
           User.findOne({ Email: req.body.email }, function(err, user) {
           /*if(err) {
               //handle error here
               return callback(error);
            }*/
            
            //if a user was found, that means the user's email matches the entered email
            try{if (user) {
                
                var UserInfo = user.Firstname;
                res.render("index.ejs",{UserInfo});
                /*res.render('index.html', {
                    UserInfo})*/
        
               // res.json(user.Firstname)
               // req.flash('success_msg', 'You are now registered. Log In!');
               // res.redirect('../../index.html');
            
            } else {
                console.log("user doesnot exists");  
                var err = new Error('User doesnot Exists');
                res.send('Error ' + err)
                
            }}
            catch(err) {
                //handle error here
                res.send('Error! ' + err)
               // return callback(error);
             }
         }); 
         
    }catch(err){
        res.send('Error ' + err)
    }
})
  

router.post('/',async(req,res) => {console.log(JSON.stringify(req.body)+"!");
  {
    const newuser = new User({
    Firstname: req.body.fname,
    LastName: req.body.lname,
    Email: req.body.email,
    Password:req.body.pwd,
    ConfirmPassword:req.body.cpwd
    })

    try{
        //const a1 =  await newuser.save() ;
        console.log(req.body.lname+"!");
        const a1= newuser.save()
        console.log(req.body.pwd+"!");
        res.json(a1);
        console.log(req.body.cpwd+"!");
    }catch(err){
        res.send('Error')
    }
}

});
router.post('/kyc',async(req,res) => {console.log(JSON.stringify(req.body)+"!");
  {
    const newuserkyc = new Kyc({
    CustomerName: req.body.cname,
    FatherName: req.body.fname,
    Email: req.body.email,
    Address:req.body.addr,
    PhoneNo:req.body.phno
    })

    try{
        //const a1 =  await newuser.save() ;
        
        const a1= newuserkyc.save()
        
        //res.json(a1);
        res.redirect('../../index.html');
        
    }catch(err){
        res.send('Error')
    }
}

});

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.sub = req.body.sub
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router