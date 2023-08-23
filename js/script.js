const errorEl = document.querySelectorAll(".error"),
  fnameEl = document.querySelector("#fname"),
  lnameEl = document.querySelector("#lname"),
  phoneEl = document.querySelector("#phone"),
  emailEl = document.querySelector("#email"),
  passwordEl = document.querySelector("#password"),
  cpasswordEl = document.querySelector("#cpassword"),
  submitBtn = document.querySelector("#sign-up-btn");

fnameEl.addEventListener("keyup", checkValid);
lnameEl.addEventListener("keyup", checkValid);
phoneEl.addEventListener("keyup", checkValid);
emailEl.addEventListener("keyup", checkValid);
passwordEl.addEventListener("keyup", checkValid);
cpasswordEl.addEventListener("keyup", checkValid);
submitBtn.addEventListener("click", submitForm);

let valid = [false, false, false, true, false, true];

function checkValid(event) {
  const ID = event.target.getAttribute("id");
  let text = event.target.value;
  text = text.trim();
  event.target.value = text;
  console.log(text);
  const digRegex = /[a-zA-Z]+/g,
    numRegex = /[0-9]+/g,
    sizeRegex = /^[0-9a-zA-Z]{8,}$/g,
    emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  switch (ID) {
    case "fname":
      valid[0] =
        text == ""
          ? showErrorMsg("*First name required.", 0)
          : numRegex.test(text)
          ? showErrorMsg("*Name can't contain numbers.", 0)
          : showErrorMsg("", 0);
      break;
    case "lname":
      valid[1] =
        text == ""
          ? showErrorMsg("*Last name required.", 1)
          : numRegex.test(text)
          ? showErrorMsg("*Name can't contain numbers.", 1)
          : showErrorMsg("", 1);
      break;
    case "email":
      valid[2] = !emailRegex.test(text)
        ? showErrorMsg("*Please enter a valid email.", 2)
        : showErrorMsg("", 2);
      break;
    case "phone":
      valid[3] =
        text == ""
          ? showErrorMsg("", 3)
          : digRegex.test(text)
          ? showErrorMsg("*Please enter a valid number.", 3)
          : showErrorMsg("", 3);
      break;
    case "password":
      valid[4] = !numRegex.test(text)
        ? showErrorMsg("*Password requires a number.", 4)
        : !digRegex.test(text)
        ? showErrorMsg("*Password requires a digit.", 4)
        : !sizeRegex.test(text)
        ? showErrorMsg("*Password requires minimum length of 8 characters.", 4)
        : showErrorMsg("", 4);
      break;
    default:
      showErrorMsg("", 5);
      break;
  }
}

function showErrorMsg(message, index) {
  const currentErrorEl = errorEl[index];
  currentErrorEl.textContent = message;
  return message === "";
}

function submitForm() {
  const password = passwordEl.value;
  const cpassword = cpasswordEl.value;
  valid[5] =
    password != cpassword
      ? showErrorMsg("*Password doesn't match.", 5)
      : showErrorMsg("", 5);
  if (valid.includes(false)) e.preventDefault();
}
