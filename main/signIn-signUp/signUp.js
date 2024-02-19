import { sleep } from "../AllSocialPanel/dayTime.js"

const date = new Date()


const signUp = document.getElementById('signup')
const signupForm = document.querySelector('.signup-form')
const warning = document.querySelector('.warning')
let passwords = document.getElementById('password');


// signUp.addEventListener('click', (e)=>{
//   e.preventDefault()
//   console.log('hello')
// })

const signinUp = (database, auth, stt, ref,child, get, update, createUserWithEmailAndPassword, sendEmailVerification)=>{

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const array = []
    const emailArray = []
    let idNo = 0;
    let balance = 0.00;
    if(username.length < 6){
      warning.style.display = 'block'
      warning.innerHTML = 'Minimum length of username is 6'
      passwords.value =''
    }else if(email.includes('@') !== true){
      warning.style.display = 'block'
      warning.innerHTML = 'please enter a correct email'
      passwords.value =''
    }else if(email.includes('.') !== true){
      warning.style.display = 'block'
      warning.innerHTML = 'please enter a correct email'
      passwords.value =''
    }else if(email.length < 10){
      warning.style.display = 'block'
      warning.innerHTML = 'please enter a correct email'
      passwords.value =''
    }else if(password.length < 6){
      warning.style.display = 'block'
      warning.innerHTML = 'minimum password is 6'
      passwords.value =''
    }
  else{

    get(child(stt, 'users' )).then((snapshot) => {
      if(snapshot.exists()){
        let usd = Object.values(snapshot.val())
        for(let i = 0; i < usd.length; i++){
          let tems = usd[i].username;
          let mailed = usd[i].email;
          array.push(tems)
          emailArray.push(mailed)
        }
        if(array.includes(username)){
          warning.style.display = 'block'
          warning.innerHTML = username + ' already exits' 
          passwords.value =''          
          
        }else
        if(emailArray.includes(email)){
          warning.style.display = 'block'
          warning.innerHTML = email + ' already exits' 
          
          passwords.value =''          
        }
         else {
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
            sendEmailVerification(auth.currentUser)
            .then(() => {
              window.location.replace('/main/signIn-signUp/confirmEmail.html')
            })
            
            const user = userCredential.user;
            // ...
            update(ref(database, 'users/' + user.uid),{
              email: email,
              username: username,
              last_login: date,
              idNo,
              balance: parseFloat(balance.toFixed(2)),
              tbody: ''
            });
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
          
        };
      } else {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          sendEmailVerification(auth.currentUser)
          .then(() => {
            window.location.replace('/main/signIn-signUp/confirmEmail.html')
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage)
          })
          
          // Signed up 
          const user = userCredential.user;
              update(ref(database, 'users/' + user.uid),{
                email: email,
                idNo,
                last_login: date,
                username: username,
                balance: parseFloat(balance.toFixed(2)),
                tbody: ''
              })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          alert(errorMessage)
          // ..
        });
      }
        
    })
        
    // })
  }
  }
  
  
  const  users = async (user)=>{
    if (user && user.emailVerified) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // await sleep(1500)
      window.location.replace('/main/index.html')
    }else if(user){
    window.location.replace('/main/signIn-signUp/confirmEmail.html')
    }
  }

  export { signUp, signinUp, users }





  
    