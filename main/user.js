import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase,  ref, child, set, get, remove, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import {  btnReset, resendConfirmation, resendCode, userConfirm, changeEmail } from "./signIn-signUp/confirmEmail.js";
import { app } from "./config/config.js";
import { signinUp, signUp, users } from "./signIn-signUp/signUp.js";
import { signIn, signinIn, userSignIn } from "./signIn-signUp/signIn.js";
import { resetPassword, resetPasswordBtn } from "./signIn-signUp/resetPassword.js";
import { sleep } from "./AllSocialPanel/dayTime.js";



const database = getDatabase(app)
const auth = getAuth();
const stt = ref(database)










onAuthStateChanged(auth, async (user) => {
  if(user){
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    //   window.location.replace('/chatApp/dist/chat.html')
    // renders()
    await sleep(1500)
    if(window.location.pathname === '/main/signIn-signUp/confirmEmail.html'){
      userConfirm(user)
    }
    if(window.location.pathname === '/main/signIn-signUp/signUp.html'){
      userSignIn(user)
    }
    if(window.location.pathname === '/main/signIn-signUp/signIn.html'){
      users(user)
    }


    if(window.location.pathname === '/main/signIn-signUp/confirmEmail.html'){
      btnReset.addEventListener('click', (e)=>{
        e.preventDefault()
        changeEmail(signOut, auth)
      })
    }
      if(window.location.pathname === '/main/signIn-signUp/confirmEmail.html'){
        resendConfirmation.addEventListener('click', (e)=>{
          e.preventDefault()
          resendCode(auth, sendEmailVerification)
      })
    }
    // ...
  } else {
      
      if(window.location.pathname === '/main/signIn-signUp/resetPassword.html'){
        resetPasswordBtn.addEventListener('click', (e)=>{
          e.preventDefault()
          resetPassword(sendPasswordResetEmail, auth)
        })
      }
      if(window.location.pathname === '/main/signIn-signUp/signUp.html'){
        signUp.addEventListener('click', (e)=>{
          e.preventDefault()
          signinUp(database, auth, stt, ref, child, get, update, createUserWithEmailAndPassword, sendEmailVerification)
        })
      }
      if(window.location.pathname === '/main/signIn-signUp/signIn.html'){
        signIn.addEventListener('click', (e)=>{
          e.preventDefault()
          signinIn(signInWithEmailAndPassword, auth, database, ref,child, get, update, stt)
        })
      }
      if(window.location.pathname === '/main/signIn-signUp/confirmEmail.html'){
        userConfirm(user)
        
      }
    }

});




export { ref,child, set, get, remove, update,auth, database, stt, onAuthStateChanged, signOut }