

const email = document.getElementById('email')
const resetPasswordBtn = document.getElementById('signup')
const header = document.querySelector('.header')



const resetPassword = (sendPasswordResetEmail, auth)=>{
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        // Password reset email sent!
        header.innerHTML = 'Password reset email sent!'
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

}


export { resetPassword, resetPasswordBtn }