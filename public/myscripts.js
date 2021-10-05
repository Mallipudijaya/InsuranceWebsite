/*function myfunction()
{
    if (document.getElementById('displaytable').style.display === 'none')
        document.getElementById('displaytable').style.display='block';
    else
        document.getElementById('displaytable').style.display='none';
}*/

var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
var user=document.getElementById('email');
var pwd = document.getElementById('pwd');
var cpwd = document.getElementById('cpwd');
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function check()
{
   /* if(!filter.test(user))
		{
            alert("Enter valid email id.");
		}
	else if(pwd.length < 6 )
		{
			alert("Password min and max length is 6.");
		}*/
        if(pwd.value!== cpwd.value) { 
          
            document.getElementById("message").innerHTML = "passwords donot match";  
            
         }  
         else{
            document.getElementById("message").innerHTML = "";  
         }

}

function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
var modal = document.getElementById('login-form');

window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }

}