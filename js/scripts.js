// contact page
let form= document.forms
form.addEventListener("submit", getValues);

let  = [];

function getValues(event);
    event.();

    let formData = {
      "name": this.name.value,
      "email": this.email.value,
      "subject": this.subject.value,
      "message": this.message.value,
      "submit": this.submit.value,
    }

    let out = `
    <p>Name: <span>${formData.name}</span></p>
    <p>E-mail: <span>${formData.email}</span></p>
    <p>Subject: <span>${formData.subject}</span></p>
    <p>Message: <span>${formData.message}</span></p>
    <p>Submit: <span>${formData.submit}</span></p>
    `

    document.querySelector(".out code").innerHTML = out;

     .push(formData);

    
     