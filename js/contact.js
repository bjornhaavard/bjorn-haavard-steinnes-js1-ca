const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const messageSent = document.querySelector("#messageSent");

function validateInput(event) {
  event.preventDefault();

  if (checkValue(fullName.value, 6)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkValue(address.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkValue(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkValue(fullName.value, 5) && checkValue(address.value, 25) && validateEmail(email.value) && checkValue(subject.value, 10)) {
    messageSent.innerHTML = `<div id="messageSent">Message sent</div>`;
    messageSent.style.display = "block";
    form.reset();
  }
}

form.addEventListener("submit", validateInput);

function checkValue(value, char) {
  if (value.trim().length >= char) {
    return true;
  } else {
    return false;
  }
}


function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
