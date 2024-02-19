import { sleep } from "../AllSocialPanel/dayTime.js"


const passwordDiv = document.querySelector('.form-group')
const signIn = document.querySelector('.btn')
const warning = document.getElementById('warning')

const userSignIn =  (user)=>{
  if (user && user.emailVerified) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    window.location.replace('/main/index.html')
  }else if(user){
    window.location.replace('/main/signIn-signUp/confirmEmail.html')
  }
}

let passwords = document.getElementById('password');

let slash = document.querySelector('.fa-eye')

if(window.location.pathname === '/main/signIn-signUp/signIn.html'){
  slash.addEventListener('click', ()=>{
    if(slash.className === 'fa-regular fa-eye'){
      passwords.removeAttribute('type')
      passwords.setAttribute('type', 'text')
      slash.className = 'fa-regular fa-eye-slash'

    }else{
      passwords.removeAttribute('type')
      passwords.setAttribute('type', 'password')
      slash.className = 'fa-regular fa-eye'
    }
    // passwords.value = ''
  })
}




const signinIn = (signInWithEmailAndPassword, auth, database, ref,child, get, update, stt)=>{


  // signIn.addEventListener('click', (e) => {
    // e.preventDefault()
    const username = document.getElementById('username').value
    // const email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // const username = document.getElementById('username').value;
    const date = new Date()
    // console.log(username)
    if(username.length < 5){
      warning.style.display = 'block'
      warning.innerHTML = 'Minimum length of username is 6'
      passwords.value = ''
    }else if(password.length < 6){
      warning.style.display = 'block'
      warning.innerHTML = 'minimum password is 6'
      passwords.value = ''
    }else{
    const array = []
    get(child(stt, 'users' )).then( async (snapshot) => {
        
        if(snapshot.exists()) {
            let usd = await Object.values(snapshot.val())
            // 
            for(let i = 0; i < usd.length; i++){
                let tems =  usd[i].username;
                let tem =  usd[i].email;
                array.push(tems)
            }
            if(array.includes(username)){
                let position = array.indexOf(username)
                let tem = usd[position].email
                const email = username.replace(username, tem)
                // alert(email + ' exits')  
                    signInWithEmailAndPassword(auth, email, password)
                  .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const uid = user.uid;
                    get(child(stt, 'users/' + uid )).then(async  (snapshot) => {
                      if(snapshot.exists()) {
                        let balance = await Object.values(snapshot.val())[0]
                        let email = await Object.values(snapshot.val())[1]
                        let idNo = await Object.values(snapshot.val())[2]
                        let tbody = await Object.values(snapshot.val())[4]
                        let usernamed = await Object.values(snapshot.val())[5]
                        
                        update(ref(database, 'users/' + uid),{
                          email,
                          idNo,
                          last_login: date,
                          username: usernamed,
                          balance: parseFloat(balance.toFixed(2)),
                          tbody
                        })
                        update(ref(database, 'users/' + user.uid),{
                          last_login: date
                      })
                      }else{
                        alert('please resignup with your credential')
                      }
                    })
                        
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if(errorCode === 'auth/invalid-credential'){
                      warning.style.display = 'block'
                      warning.innerHTML = 'password incorrect'
                      passwords.value = ''
                    }
                });
            } else if(username.includes('@')){
                if(username.includes('.') !== true){
                warning.style.display = 'block'
                warning.innerHTML = 'please enter a correct email'
                passwords.value = ''
              }else if(username.length < 10){
                warning.style.display = 'block'
                warning.innerHTML = 'please enter a correct email'
                passwords.value = ''
              }else if(password.length < 6){
                warning.style.display = 'block'
                warning.innerHTML = 'minimum password is 6'
                passwords.value = ''
              }else{
              signInWithEmailAndPassword(auth, username, password)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    get(child(stt, 'users/' + uid )).then( async (snapshot) => {
                      if(snapshot.exists()) {
                        let balance = await Object.values(snapshot.val())[0]
                        let email = await Object.values(snapshot.val())[1]
                        let idNo = await Object.values(snapshot.val())[2]
                        let tbody = await Object.values(snapshot.val())[4]
                        let usernamed = await Object.values(snapshot.val())[5]
                        
                        update(ref(database, 'users/' + uid),{
                          email: email,
                          idNo,
                          last_login: date,
                          username: usernamed,
                          balance: parseFloat(balance.toFixed(2)),
                          tbody
                        })
                      }else{
                        alert('please resignup with your credential')
                        passwords.value = ''
                        
                      }
                    })
                    // update(ref(database, 'users/' + user.uid),{
                    //     last_login: date
                    // })
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if(errorCode === 'auth/invalid-credential'){
                      warning.style.display = 'block'
                      warning.innerHTML = 'password or email is incorrect'
                      passwords.value = ''
                    }
                    if(errorCode === 'auth/invalid-email'){
                      warning.style.display = 'block'
                      warning.innerHTML = 'password or email is incorrect'
                      passwords.value = ''
                    }
                  })
                }
            }else{
              warning.style.display = 'block'
              warning.innerHTML = 'user does not exist'
              passwords.value = ''
            }
        }
      });
    }
      // })
}


export { userSignIn, signIn, signinIn }