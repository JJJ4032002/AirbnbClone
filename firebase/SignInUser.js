import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import app from "./firebaseInitialization.js";
const auth = getAuth(app);
function SignInUser(email, password, node) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      location.href = "home_index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      node.textContent = "This email is already used";
      node.textContent = "Invalid Email/Password";
      setTimeout(() => {
        node.textContent = "";
      }, 1000);
      // ..
    });
}

export default SignInUser;
