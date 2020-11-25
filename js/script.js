let userEmail = document.querySelector('#email-input');
let btn = document.getElementsByTagName("button");
let alertMsg = document.getElementById('alert-msg');
let errorIcon = document.getElementById('error-icon');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function validateEmail(input) {
  if (input.value == "" || input.value == undefined || !input.value.match(RegEmail)) {
    alertMsg.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
  }
  else {

  }
}

console.log(btn)

btn[0].addEventListener('click', e => {
  e.preventDefault;

  validateEmail(userEmail);
})

