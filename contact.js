function welcome()
{
    const name=document.getElementById("name")
    
    const welcometext=document.getElementById("welcometext")
    welcometext.textContent="Hi "+name.value+" Thank You For Reaching Out To Us.We Got Your Message. We Will Get Back To You Shortly"
    welcometext.style.textAlign="center"
    welcometext.style.fontSize="30px"
    
}



function response(event)
{
   event.preventDefault();
   var responseBox=document.getElementById("responseBox")
   responseBox.style.display="block"
   return false
   
}