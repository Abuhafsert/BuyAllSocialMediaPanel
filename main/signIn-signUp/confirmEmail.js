const confirmingEmailHeader = document.querySelector('.confirming-email-header')
const confirmingEmailText = document.querySelector('.confirming-email')
const mainContainer = document.querySelector('.main-container')
// confirmingEmailHeader.style.display = 'block'
const btnReset = document.querySelector('.btnReset')
const message = document.querySelector('.message')

const resendConfirmation = document.querySelector('.resend-confirmation-code')



export { confirmingEmailHeader }



const resendCode = (auth, sendEmailVerification)=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
        message.innerHTML = 'Code Resend'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      alert(errorMessage)
    })
}


const changeEmail = (signOut, auth)=>{
    signOut(auth)
    window.location.replace('/main/signIn-signUp/signUp.html')

}

const userConfirm = (user)=>{
    if (user && user.emailVerified) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // await sleep(1500)
        window.location.replace('/main/index.html')
      }else if(!user){
          window.location.replace('/main/signIn-signUp/signUp.html')
      }
}

export { btnReset, resendConfirmation, resendCode, userConfirm, changeEmail }