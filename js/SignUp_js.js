import SignUpUser from "../firebase/SignUpUser.js";

import submitBtnState from "../helpers/submitBtnState.js";
let formField_p = document.querySelectorAll(".form__field p");
let formField_input = document.querySelectorAll(".form__field input");
let signUpErr = document.querySelector(".label.signUpError");
let formSubBtn = document.querySelector(".form__signUpButton");

// -------- 4
let show_errorMsg = (element_p) => {
  if (element_p == formField_p[0]) {
    element_p.textContent = "First Name cannot be empty";
  }
  if (element_p == formField_p[1]) {
    element_p.textContent = "Last Name cannot be empty";
  }
  if (element_p == formField_p[2]) {
    element_p.textContent = "Email cannot be empty";
  }
  if (element_p == formField_p[3]) {
    element_p.textContent = "Password cannot be empty";
  }
};

// -------- 3
// input_element is of type '.form__field div input'
let show_invalidInput = (input_element) => {
  //accessing '.form__field div img'
  input_element.nextElementSibling.classList.add("imgVisible");

  //accessing '.form__field div'
  input_element.parentElement.classList.add("redBorder");

  // passing 'element_p' / '.form__field p'
  show_errorMsg(input_element.parentElement.nextElementSibling);
};

// -------- 2
function mark_Empty() {
  formField_input.forEach((input_iterator) => {
    if (input_iterator.value == "") {
      show_invalidInput(input_iterator);
      k++;
    }
  });
}

// -------- 1
document.querySelector(".form__signUpButton").addEventListener("click", () => {
  let email = formField_input[2].value;
  let password = formField_input[3].value;

  SignUpUser(email, password, signUpErr);
});

// element_iterator is of type '.form__field div input'
document.querySelectorAll(".form__field input").forEach((element_iterator) => {
  element_iterator.addEventListener("keyup", () => {
    console.log(formField_input[2]);
    if (
      (element_iterator.value != "" &&
        element_iterator != formField_input[2]) ||
      (element_iterator == formField_input[2] &&
        element_iterator.value.includes("@"))
    ) {
      element_iterator.nextElementSibling.classList.remove("imgVisible");
      element_iterator.parentElement.nextElementSibling.textContent = "";
      element_iterator.parentElement.classList.remove("redBorder");
    } else if (element_iterator.value == "") {
      show_invalidInput(element_iterator);
    } else if (
      element_iterator == formField_input[2] &&
      !element_iterator.value.includes("@")
    ) {
      show_invalidInput(element_iterator);
      formField_p[2].textContent = "Looks like this is not an email";
    }
    submitBtnState(formSubBtn);
  });
});

submitBtnState(formSubBtn);
