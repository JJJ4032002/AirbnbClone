import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import app from "./firebaseInitialization.js";
const auth = getAuth(app);
function SignUpUser(email, password, node) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      location.href = "signIn_index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      node.textContent = "Invalid Email/Password";
      setTimeout(() => {
        node.textContent = "";
      }, 1000);
      // ..
    });
}

export default SignUpUser;
