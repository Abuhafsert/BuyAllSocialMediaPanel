import { balance } from "../referrallWithFollower.js"




const referral100 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
    get(child(stt, 'users/' + uid )).then( async (snapshot) => {
          let userBalances = await Object.values(snapshot.val())[0]
          
          if(parseFloat(nextSibling) > Number(userBalances)){
            alert('not enough fund in balance')
            
          } else if(parseFloat(nextSibling) < 1) {
              alert('minimum order is 1')
            }else if(input < 1){
              alert('minimum order is 1')
            }
            else {
                let tbod = document.createElement('tbody')
            get(child(stt, 'users/' + uid)).then(async (snapshot) => {
        
              // ...
              idNo =  parseFloat(Object.values(snapshot.val())[2])

                let usds = await Object.values(snapshot.val())[4]
                tbod.innerHTML = usds
              })
              get(child(stt, 'referralWithFollowers/' + 100 )).then( async (snapshot) => {
                
                if(snapshot.exists()) {
                  let usd = await Object.values(snapshot.val())[0]
                  if(input > usd.length){
                    alert('ohh sorry remaining accounts is ' + usd.length)
                    window.location.reload()
                  }else{
                    let available = Number(userBalances) - parseFloat(nextSibling)
                    balance(uid, parseFloat(available), update, ref, database)
                  let selectt = usd.slice(current,input)
                  usd.splice(current, input)
                  let k = usd.filter(fr => fr !== selectt)
                  await update(ref(database, 'referralWithFollowers/' + 100 + '/'),{
                    referralProducts: usd
                    
                  })

                  for(let l of selectt){
                      let tr = document.createElement('tr')
                      idNo++;
                      let username = l.split(':')[0]
                      let password = l.split(':')[1]
                      let email = l.split(':')[2]
                      let emailPassword = l.split(':')[3]
                      tr.innerHTML = `  <tr>
                      <td>${idNo}</td>
                      <td>${username}</td>
                      <td>${password}</td>
                      <td>${email}</td>
                      <td>${emailPassword}</td>
                      <td>referral Instagram With 100+ Followers</td>
                      <td>${price}</td>
                      <td>${da}</td>
                  </tr>`
              
                  tbod.appendChild(tr)
                }
                
                input = 1;
                await update(ref(database, 'users/' + uid),{
                  tbody: tbod.innerHTML,
                  idNo
                })
                setTimeout(()=>{
                    window.location.href = (fileLocation)
                }, 2000)
              }
    
            }else{
                alert('Not Available Come Back in 24 hours')
                window.location.reload()
            }
        })
        }
        
    })

}
const referral200 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
    get(child(stt, 'users/' + uid )).then( async (snapshot) => {
          let userBalances = await Object.values(snapshot.val())[0]
          
          if(parseFloat(nextSibling) > Number(userBalances)){
            alert('not enough fund in balance')
            
          } else if(parseFloat(nextSibling) < 1) {
              alert('minimum order is 1')
            }else if(input < 1){
              alert('minimum order is 1')
            }
            else {
                let tbod = document.createElement('tbody')
            get(child(stt, 'users/' + uid)).then(async (snapshot) => {
        
              // ...
              idNo =  parseFloat(Object.values(snapshot.val())[2])

                let usds = await Object.values(snapshot.val())[4]
                tbod.innerHTML = usds
              })
              get(child(stt, 'referralWithFollowers/' + 200)).then( async (snapshot) => {
                
                if(snapshot.exists()) {
                  let usd = await Object.values(snapshot.val())[0]
                  if(input > usd.length){
                    alert('ohh sorry remaining accounts is ' + usd.length)
                    window.location.reload()
                  }else{
                    let available = Number(userBalances) - parseFloat(nextSibling)
                    balance(uid, parseFloat(available), update, ref, database)
                  let selectt = usd.slice(current,input)
                  usd.splice(current, input)
                  let k = usd.filter(fr => fr !== selectt)
                  await update(ref(database, 'referralWithFollowers/' + 200 + '/'),{
                    referralProducts: usd
                    
                  })

                  for(let l of selectt){
                      let tr = document.createElement('tr')
                      idNo++;
                      let username = l.split(':')[0]
                      let password = l.split(':')[1]
                      let email = l.split(':')[2]
                      let emailPassword = l.split(':')[3]
                      tr.innerHTML = `  <tr>
                      <td>${idNo}</td>
                      <td>${username}</td>
                      <td>${password}</td>
                      <td>${email}</td>
                      <td>${emailPassword}</td>
                      <td>referral Instagram With 200+ Followers</td>
                      <td>${price}</td>
                      <td>${da}</td>
                  </tr>`
              
                  tbod.appendChild(tr)
                }
                
                input = 1;
                await update(ref(database, 'users/' + uid),{
                  tbody: tbod.innerHTML,
                  idNo
                })
                setTimeout(()=>{
                    window.location.href = (fileLocation)
                }, 2000)
              }
    
            }else{
                alert('Not Available Come Back in 24 hours')
                window.location.reload()
            }
        })
        }
        
    })

}




const referral300 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
    get(child(stt, 'users/' + uid )).then( async (snapshot) => {
          let userBalances = await Object.values(snapshot.val())[0]
          
          if(parseFloat(nextSibling) > Number(userBalances)){
            alert('not enough fund in balance')
            
          } else if(parseFloat(nextSibling) < 1) {
              alert('minimum order is 1')
            }else if(input < 1){
              alert('minimum order is 1')
            }
            else {
                let tbod = document.createElement('tbody')
            get(child(stt, 'users/' + uid)).then(async (snapshot) => {
        
              // ...
              idNo =  parseFloat(Object.values(snapshot.val())[2])

                let usds = await Object.values(snapshot.val())[4]
                tbod.innerHTML = usds
              })
              get(child(stt, 'referralWithFollowers/' + 300)).then( async (snapshot) => {
                
                if(snapshot.exists()) {
                  let usd = await Object.values(snapshot.val())[0]
                  if(input > usd.length){
                    alert('ohh sorry remaining accounts is ' + usd.length)
                    window.location.reload()
                  }else{
                    let available = Number(userBalances) - parseFloat(nextSibling)
                    balance(uid, parseFloat(available), update, ref, database)
                  let selectt = usd.slice(current,input)
                  usd.splice(current, input)
                  let k = usd.filter(fr => fr !== selectt)

                  await update(ref(database, 'referralWithFollowers/' + 300 + '/'),{
                    referralProducts: usd
                    
                  })
                  for(let l of selectt){
                      let tr = document.createElement('tr')
                      idNo++;
                      let username = l.split(':')[0]
                      let password = l.split(':')[1]
                      let email = l.split(':')[2]
                      let emailPassword = l.split(':')[3]
                      tr.innerHTML = `  <tr>
                      <td>${idNo}</td>
                      <td>${username}</td>
                      <td>${password}</td>
                      <td>${email}</td>
                      <td>${emailPassword}</td>
                      <td>referral Instagram With 300+ Followers</td>
                      <td>${price}</td>
                      <td>${da}</td>
                  </tr>`
              
                  tbod.appendChild(tr)
                }
                
                input = 1;
                await update(ref(database, 'users/' + uid),{
                  tbody: tbod.innerHTML,
                  idNo
                })
                setTimeout(()=>{
                    window.location.href = (fileLocation)
                }, 2000)
              }
    
            }else{
                alert('Not Available Come Back in 24 hours')
                window.location.reload()
            }
        })
        }
        
    })

}
const referral400 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
    get(child(stt, 'users/' + uid )).then( async (snapshot) => {
          let userBalances = await Object.values(snapshot.val())[0]
          
          if(parseFloat(nextSibling) > Number(userBalances)){
            alert('not enough fund in balance')
            
          } else if(parseFloat(nextSibling) < 1) {
              alert('minimum order is 1')
            }else if(input < 1){
              alert('minimum order is 1')
            }
            else {
                let tbod = document.createElement('tbody')
            get(child(stt, 'users/' + uid)).then(async (snapshot) => {
        
              // ...
              idNo =  parseFloat(Object.values(snapshot.val())[2])

                let usds = await Object.values(snapshot.val())[4]
                tbod.innerHTML = usds
              })
              get(child(stt, 'referralWithFollowers/' + 400)).then( async (snapshot) => {
                
                if(snapshot.exists()) {
                  let usd = await Object.values(snapshot.val())[0]
                  if(input > usd.length){
                    alert('ohh sorry remaining accounts is ' + usd.length)
                    window.location.reload()
                  }else{
                    let available = Number(userBalances) - parseFloat(nextSibling)
                    balance(uid, parseFloat(available), update, ref, database)
                  let selectt = usd.slice(current,input)
                  usd.splice(current, input)
                  let k = usd.filter(fr => fr !== selectt)
                  await update(ref(database, 'referralWithFollowers/' + 400 + '/'),{
                    referralProducts: usd
                    
                  })

                  for(let l of selectt){
                      let tr = document.createElement('tr')
                      idNo++;
                      let username = l.split(':')[0]
                      let password = l.split(':')[1]
                      let email = l.split(':')[2]
                      let emailPassword = l.split(':')[3]
                      tr.innerHTML = `  <tr>
                      <td>${idNo}</td>
                      <td>${username}</td>
                      <td>${password}</td>
                      <td>${email}</td>
                      <td>${emailPassword}</td>
                      <td>referral Instagram With 400+ Followers</td>
                      <td>${price}</td>
                      <td>${da}</td>
                  </tr>`
              
                  tbod.appendChild(tr)
                }
                
                input = 1;
                await update(ref(database, 'users/' + uid),{
                  tbody: tbod.innerHTML,
                  idNo
                })
                setTimeout(()=>{
                    window.location.href = (fileLocation)
                }, 2000)
              }
    
            }else{
                alert('Not Available Come Back in 24 hours')
                window.location.reload()
            }
        })
        }
        
    })

}
const referral500 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
    get(child(stt, 'users/' + uid )).then( async (snapshot) => {
          let userBalances = await Object.values(snapshot.val())[0]
          
          if(parseFloat(nextSibling) > Number(userBalances)){
            alert('not enough fund in balance')
            
          } else if(parseFloat(nextSibling) < 1) {
              alert('minimum order is 1')
            }else if(input < 1){
              alert('minimum order is 1')
            }
            else {
                let tbod = document.createElement('tbody')
            get(child(stt, 'users/' + uid)).then(async (snapshot) => {
        
              // ...
              idNo =  parseFloat(Object.values(snapshot.val())[2])

                let usds = await Object.values(snapshot.val())[4]
                tbod.innerHTML = usds
              })
              get(child(stt, 'referralWithFollowers/' + 500)).then( async (snapshot) => {
                
                if(snapshot.exists()) {
                  let usd = await Object.values(snapshot.val())[0]
                  if(input > usd.length){
                    alert('ohh sorry remaining accounts is ' + usd.length)
                    window.location.reload()
                  }else{
                    let available = Number(userBalances) - parseFloat(nextSibling)
                    balance(uid, parseFloat(available), update, ref, database)
                  let selectt = usd.slice(current,input)
                  usd.splice(current, input)
                  let k = usd.filter(fr => fr !== selectt)
                  
                  await update(ref(database, 'referralWithFollowers/' + 500 + '/'),{
                    referralProducts: usd
                    
                  })
                  for(let l of selectt){
                      let tr = document.createElement('tr')
                      idNo++;
                      let username = l.split(':')[0]
                      let password = l.split(':')[1]
                      let email = l.split(':')[2]
                      let emailPassword = l.split(':')[3]
                      tr.innerHTML = `  <tr>
                      <td>${idNo}</td>
                      <td>${username}</td>
                      <td>${password}</td>
                      <td>${email}</td>
                      <td>${emailPassword}</td>
                      <td>referral Instagram With 500+ Followers</td>
                      <td>${price}</td>
                      <td>${da}</td>
                  </tr>`
              
                  tbod.appendChild(tr)
                }
                
                input = 1;
                await update(ref(database, 'users/' + uid),{
                  tbody: tbod.innerHTML,
                  idNo
                })
                setTimeout(()=>{
                    window.location.href = (fileLocation)
                }, 2000)
              }
    
            }else{
                alert('Not Available Come Back in 24 hours')
                window.location.reload()
            }
        })
        }
        
    })

}



export { referral100, referral200, referral300, referral400, referral500 }