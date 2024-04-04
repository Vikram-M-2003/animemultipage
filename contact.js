// Email js


let cbtn =document.getElementById("cbtn");
let formname = document.getElementById("from_name");
let email = document.getElementById("email");
let phone =  document.getElementById("phone_number");
let subject =  document.getElementById("subject");
let message =  document.getElementById("message");


let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click",()=>{
    if (formname.value ==="") {
        alert("Username cannot be blank.")
    }
    else{
        formname.value
    }
    if (email.value ==="") {
        alert("Email cannot be blank.")
    }
    else{
        email.value
    }
    if (phone.value ==="") {
        alert("Phone number cannot be blank.")
    }
    else{
        phone.value
    }

})
cbtn.addEventListener("click",()=>{

    
    
    if(checkbox.checked){
        emailjs.send("service_wbi1sia","template_7rzh3xf",{
            from_name: formname.value,
            email: email.value,
            phone_number: phone.value,
            subject: subject.value,
            message: message.value,
            }).then(()=>{
                alert("Your message send successfully ☺")
                location.reload()
            })
    }
    else{
        alert("Agree the terms & conditions.")
    }
    
    
})
