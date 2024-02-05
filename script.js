var exampleInputEmail1=document.getElementById("exampleInputEmail1");
var exampleInputphone=document.getElementById("exampleInputphone");
var exampleInputPassword1=document.getElementById("exampleInputPassword1");
// span tags
var email1=document.getElementById("email1");
var ph1=document.getElementById("ph1");
var pass1=document.getElementById("pass1");

function validate()
{
    let isvalid=true;
    var regemail=/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/;
    if(regemail.test(exampleInputEmail1.value))
    {
     email1.innerText="Email is valid"
    email1.style.color='green'
    
    }
    else{
        email1.innerText="Email is invalid"
        email1.style.color='red';
        isvalid=false;
    }

// phone number
var reph=/^\d{10}$|^\d{3}[-.\s]\d{3}[-.\s]\d{4}$/;
if(reph.test(exampleInputphone.value))
{
    ph1.innerText="Phone number is valid";
    ph1.style.color='green';
}
else
{
    ph1.innerHTML="Phone number is invalid";
    ph1.style.color='red';
}
let password=exampleInputPassword1.value;
let passStrength=checkPasswordStrength(password);
if(passStrength=="strong")
{
    pass1.innerText="Strong"
    pass1.style.color='green';
   
}
else if(passStrength=="medium")
{
    pass1.innerText="Medium"
    pass1.style.color='orange'; 
    isvalid=false;
}
else
{
    pass1.innerText="Weak"
    pass1.style.color='red'; 
    isvalid=false;
}

return isvalid;
}

function checkPasswordStrength(password)
{
var strongregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
var mediumregex=/^(?=.*[a-zA-Z]).{8,}$/;
if(strongregex.test(password))
{
    return "strong";
}
else if(mediumregex.test(password))
{
    return "medium";
}
else
{
    return "weak";
}
}