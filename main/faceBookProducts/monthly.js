import { monthlyFacebook } from "./stores/monthlyfacebook.js"
import { sleep, dayTime } from "../AllSocialPanel/dayTime.js"
import { monthlyFacebookPrice } from "../pricesAccounts/facebookPrice.js"



let available = document.querySelector('.Available-pieces')
let amount = document.querySelector('.amount-purchase')

let btn = document.querySelector('.Btn-products')
let prices = document.querySelector('.prices')
let tbody = document.querySelector('.tbody')
let referral = document.querySelector('.referral-accounts')
let topElement = document.querySelector('.div')


export { btn, amount, topElement }

        
        
        
        


let price = 500;

let current = 0;

let location = '/main/order/order.html'

export { sleep }

function monthlyFacebookProduct(uid, get, child, stt, update, ref, database){
    let amountValue = btn.parentElement.parentElement.parentElement
    let btnValue = btn.parentElement.parentElement.parentElement.value;
    if(btnValue === 1){
        price = monthlyFacebookPrice
        prices.innerHTML = price * amount.value
        onInput(price, btnValue)
    }
    btn.addEventListener('click',  async ()=>{
        let input = amountValue.querySelector('.amount-purchase')
        let nextSibling = btn.previousElementSibling.firstElementChild.nextElementSibling.innerHTML
        
        ageProduct(uid, get, child, stt, update, ref, database, nextSibling, input.value, btnValue)
        await sleep(2000)
        btn.previousElementSibling.firstElementChild.nextElementSibling.innerHTML /= input.value
        input.value = 1
    })
}
      
      
      
      
function onInput(pricePerAccount, btnValue){
    let amountValue = amount.parentElement.parentElement.parentElement
    amount.addEventListener('input', ()=>{
        let price = amountValue.querySelector('.prices')
        let quantity = amountValue.querySelector('.Available-pieces')
        if(amountValue.value === 1 && btnValue === 1){
            if(amount.value > parseFloat(quantity.innerHTML)){
                amount.value = parseFloat(quantity.innerHTML)
            }
            price.innerHTML = pricePerAccount * amount.value
        }
    })
}



      
function quantitymonthlyFacebook(get, child, stt){
    let array = []
    
    get(child(stt, 'monthlyFacebook/')).then( async (snapshot) => {
        if(snapshot.exists()) {         
            
            let usd = await Object.values(snapshot.val())[0]
            if(usd){
                referral.style.display = 'flex'
                available.innerHTML = usd.length
            }else{
                referral.style.display = 'flex'
                amount.value = 0
                amount.setAttribute('disabled', true)
                referral[0].innerHTML = `Not Available Come Back in 24 hours`
                }        
        }else{
        referral.style.display = 'flex'
        amount.value = 0
        amount.setAttribute('disabled', true)
        referral.innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
}
      
      
export { quantitymonthlyFacebook, monthlyFacebookProduct }        
      
      
      
let userBalancess = document.querySelectorAll('#listnair')
let username = document.querySelector('#userbalance h6')
        

const balance = (uid, balanceAmount, update, ref, database) => { 
  update(ref(database, 'users/' + uid),{
    balance: parseFloat(balanceAmount.toFixed(2)),
  })
  userBalancess.forEach(userBalance =>{
    userBalance.innerHTML = parseFloat(balanceAmount.toFixed(2))
    })    
}

export { balance }
      
      
      
      
      
      
function ageProduct(uid, get, child, stt, update, ref, database, nextSibling, input, btnValue){
    let idNo = null;
    if(btnValue === 1){
        monthlyFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime, location, monthlyFacebookPrice)
    } 
}
      
      
      
      

      
      
      
      
                    
              
              
              
              
      


