import { balance } from "../ageWithFollowersAndPost.js"




const ageWithPost1000 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
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
              get(child(stt, 'agewithfollowerAndPost/' + 1000 )).then( async (snapshot) => {
                
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
                  
                  await update(ref(database, 'agewithfollowerAndPost/' + 1000 + '/'),{
                    years: usd
                    
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
                      <td>age Instagram With 1000+ Followers And Post</td>
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
const ageWithPost2000 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
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
              get(child(stt, 'agewithfollowerAndPost/' + 2000)).then( async (snapshot) => {
                
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
                  await update(ref(database, 'agewithfollowerAndPost/' + 2000 + '/'),{
                    years: usd
                    
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
                      <td>age Instagram With 2000+ Followers And Post</td>
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




const ageWithPost3000 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
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
              get(child(stt, 'agewithfollowerAndPost/' + 3000)).then( async (snapshot) => {
                
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

                  await update(ref(database, 'agewithfollowerAndPost/' + 3000 + '/'),{
                    years: usd
                    
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
                      <td>age Instagram With 3000+ Followers ANd Post</td>
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
const ageWithPost4000 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
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
              get(child(stt, 'agewithfollowerAndPost/' + 4000)).then( async (snapshot) => {
                
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
                  await update(ref(database, 'agewithfollowerAndPost/' + 4000 + '/'),{
                    years: usd
                    
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
                      <td>age Instagram With 4000+ Followers And Post</td>
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
const ageWithPost5000 = async (uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, da, fileLocation, price)=>{
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
              get(child(stt, 'agewithfollowerAndPost/' + 5000)).then( async (snapshot) => {
                
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
                await update(ref(database, 'agewithfollowerAndPost/' + 5000 + '/'),{
                  years: usd
                  
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
                      <td>Age Instagram With 5000+ Followers And Post</td>
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



export { ageWithPost1000, ageWithPost2000, ageWithPost3000, ageWithPost4000, ageWithPost5000 }