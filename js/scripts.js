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

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    
     