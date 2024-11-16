var emails=[
    {email:'maged@gmail.com',password:'12345678'},
    {email:'ali@gmail.com',password:'121212'},
    {email:'nada@gmail.com',password:'555555'},

]
function validate(){
    var emailvalue , passvalue , mesg1,mesg2;
    mesg1=document.getElementById('demo1');
    mesg2=document.getElementById('demo2');
    emailvalue=document.getElementById('email').value;
    passvalue=document.getElementById('password').value;
    for(var i=0 ; i<= emails.length ; i++ ){
        if(emailvalue === emails[i].email && passvalue === emails[i].password)
        {
            //  mesg1.innerHTML='Valid Email';
            //  mesg2.innerHTML=' Valid Password';
            alert("welcome to my website , I am gold to see you");
            location.href='home.html';
            break;
        }
        else{
            mesg1.innerHTML='Not Valid Email';
            mesg1.style.color='red'; 
            mesg1.style.backgroundColor='lemonchiffon';
            mesg2.innerHTML='Not Valid Password';
            mesg2.style.color='red'; 
            mesg2.style.backgroundColor='lemonchiffon';
        }
    }
}


function checkpassword(){
    var x=document.getElementById('text');
    x.innerHTML='Password Must contain a number '+"<br>"+'password must consist from * keys';

}

