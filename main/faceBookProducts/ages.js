import { oneYearFacebookPrice,
twoYearFacebookPrice,
threeYearFacebookPrice,
fourYearFacebookPrice,
fiveYearFacebookPrice,
sixYearFacebookPrice,
sevenYearFacebookPrice,
eightYearFacebookPrice,
nineYearFacebookPrice,
tenYearFacebookPrice
 } from "../pricesAccounts/facebookPrice.js";
import { sleep, dayTime } from "../AllSocialPanel/dayTime.js";
import { oneYearFacebook,
twoYearFacebook,
threeYearFacebook,
fourYearFacebook,
fiveYearFacebook,
sixYearFacebook,
sevenYearFacebook,
eightYearFacebook,
nineYearFacebook,
tenYearFacebook
} from "./stores/ageFacebook.js";



let btns = document.querySelectorAll('.Btn-products');
let  prices = document.querySelectorAll('.prices')
let amount = document.querySelectorAll('.amount-purchase')
let pricePerAccount = null;




let location = '/main/order/order.html'


const accountFacebookPrices = (uid, get, child, stt, update, ref, database)=>{
    btns.forEach(btn => {
        let amountValue = btn.parentElement.parentElement.parentElement
        let btnValue = btn.parentElement.parentElement.parentElement.value;
        if(btnValue === 1){
            pricePerAccount = oneYearFacebookPrice
            prices[0].innerHTML = pricePerAccount * amount[0].value
            onInput(pricePerAccount, btnValue)
            }else if(btnValue === 2){
                pricePerAccount = twoYearFacebookPrice
                prices[1].innerHTML = pricePerAccount * amount[1].value
                onInput(pricePerAccount, btnValue)
                
            }else if(btnValue === 3){
                pricePerAccount = threeYearFacebookPrice
                prices[2].innerHTML = pricePerAccount * amount[2].value
                onInput(pricePerAccount, btnValue)
                
                
            }else if(btnValue === 4){
                pricePerAccount = fourYearFacebookPrice
                prices[3].innerHTML = pricePerAccount * amount[3].value
                
                onInput(pricePerAccount, btnValue)
            }else if(btnValue === 5){
                pricePerAccount = fiveYearFacebookPrice
                prices[4].innerHTML = pricePerAccount * amount[4].value
                
                onInput(pricePerAccount, btnValue)
            }else if(btnValue === 6){
                pricePerAccount = sixYearFacebookPrice
                prices[5].innerHTML = pricePerAccount * amount[5].value
                
                onInput(pricePerAccount, btnValue)
            }else if(btnValue === 7){
                pricePerAccount = sevenYearFacebookPrice
                prices[6].innerHTML = pricePerAccount * amount[6].value
                onInput(pricePerAccount, btnValue)
                
            }else if(btnValue === 8){
                pricePerAccount = eightYearFacebookPrice
                prices[7].innerHTML = pricePerAccount * amount[7].value
                
                onInput(pricePerAccount, btnValue)
            }else if(btnValue === 9){
                pricePerAccount = nineYearFacebookPrice
                prices[8].innerHTML = pricePerAccount * amount[8].value
                
                onInput(pricePerAccount, btnValue)
            }else if(btnValue === 10){
                pricePerAccount = tenYearFacebookPrice
                prices[9].innerHTML = pricePerAccount * amount[9].value
                
                onInput(pricePerAccount, btnValue)
            };
            btn.addEventListener('click', async ()=>{
                let input = amountValue.querySelector('.amount-purchase')
                let nextSibling = btn.previousElementSibling.firstElementChild.nextElementSibling.innerHTML
                ageProduct(uid, get, child, stt, update, ref, database, nextSibling, input.value, btnValue)
                await sleep(2000)
                btn.previousElementSibling.firstElementChild.nextElementSibling.innerHTML /= input.value
                input.value = 1
                
            });
            // });
        });

    }
    

    function pricePerOne(pricePerAccount){
        if(pricePerAccount === 1){
            console.log(pricePerAccount)

        }
        // return pricePerAccount
    }

function onInput(pricePerAccount, btnValue){
    amount.forEach(amounts =>{
        let amountValue = amounts.parentElement.parentElement.parentElement
        amounts.addEventListener('input', ()=>{
            let price = amountValue.querySelector('.prices')
            let quantity = amountValue.querySelector('.Available-pieces')
            if(amountValue.value === 1 && btnValue === 1){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
                console.log(parseFloat(quantity.innerHTML) > amounts.value)
            }else if(amountValue.value === 2 && btnValue === 2){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 3 && btnValue === 3){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 4 && btnValue === 4){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 5 && btnValue === 5){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 6 && btnValue === 6){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 7 && btnValue === 7){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 8 && btnValue === 8){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 9 && btnValue === 9){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }else if(amountValue.value === 10 && btnValue === 10){
                if(amounts.value > parseFloat(quantity.innerHTML)){
                    amounts.value = parseFloat(quantity.innerHTML)
                }
                price.innerHTML = pricePerAccount * amounts.value
            }
        })
    })

}

let available = document.querySelectorAll('.Available-pieces')
let agesAccounts = document.querySelectorAll('.referral-accounts')
let amountPurchase = document.querySelectorAll('.amount-purchase')

function quantityFacebook(get, child, stt){
    let array = []
    
    get(child(stt, 'ageFacebookAccounts/' + 2023)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]
        if(usd){
            agesAccounts[0].style.display = 'flex'
            available[0].innerHTML = usd.length
        }else{
            agesAccounts[0].style.display = 'flex'
            amountPurchase[0].value = 0
            amountPurchase[0].setAttribute('disabled', true)
            agesAccounts[0].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[0].style.display = 'flex'
        amountPurchase[0].value = 0
        amountPurchase[0].setAttribute('disabled', true)
        agesAccounts[0].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2022)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]
        // amount.value = 1
        // console.log(usd)
        agesAccounts.forEach(ageAccount =>{
            
        })
        if(usd){
            agesAccounts[1].style.display = 'flex'
            available[1].innerHTML = usd.length
        }else{
            agesAccounts[1].style.display = 'flex'
            amountPurchase[1].value = 0
            amountPurchase[1].setAttribute('disabled', true)
            agesAccounts[1].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[1].style.display = 'flex'
        amountPurchase[1].value = 0
        amountPurchase[1].setAttribute('disabled', true)
        agesAccounts[1].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2021)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]
        // amount.value = 1
        agesAccounts.forEach(ageAccount =>{
            
        })
        if(usd){
            agesAccounts[2].style.display = 'flex'
            available[2].innerHTML = usd.length
        }else{
            agesAccounts[2].style.display = 'flex'
            amountPurchase[2].value = 0
            amountPurchase[2].setAttribute('disabled', true)
            agesAccounts[2].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[2].style.display = 'flex'
        amountPurchase[2].value = 0
        amountPurchase[2].setAttribute('disabled', true)
        agesAccounts[2].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2020)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]

        if(usd){
            agesAccounts[3].style.display = 'flex'
            available[3].innerHTML = usd.length
        }else{
            agesAccounts[3].style.display = 'flex'
            amountPurchase[3].value = 0
            amountPurchase[3].setAttribute('disabled', true)
            agesAccounts[3].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[3].style.display = 'flex'
        amountPurchase[3].value = 0
        amountPurchase[3].setAttribute('disabled', true)
        agesAccounts[3].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2019)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]

        if(usd){
            agesAccounts[4].style.display = 'flex'
            available[4].innerHTML = usd.length
        }else{
            agesAccounts[4].style.display = 'flex'
            amountPurchase[4].value = 0
            amountPurchase[4].setAttribute('disabled', true)
            agesAccounts[4].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[4].style.display = 'flex'
        amountPurchase[4].value = 0
        amountPurchase[4].setAttribute('disabled', true)
        agesAccounts[4].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2018)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]
  
        if(usd){
            agesAccounts[5].style.display = 'flex'
            available[5].innerHTML = usd.length
        }else{
            agesAccounts[5].style.display = 'flex'
            amountPurchase[5].value = 0
            amountPurchase[5].setAttribute('disabled', true)
            agesAccounts[5].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[5].style.display = 'flex'
        amountPurchase[5].value = 0
        amountPurchase[5].setAttribute('disabled', true)
        agesAccounts[5].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2017)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]
  
        if(usd){
            agesAccounts[6].style.display = 'flex'
            available[6].innerHTML = usd.length
        }else{
            agesAccounts[6].style.display = 'flex'
            amountPurchase[6].value = 0
            amountPurchase[6].setAttribute('disabled', true)
            agesAccounts[6].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[6].style.display = 'flex'
        amountPurchase[6].value = 0
        amountPurchase[6].setAttribute('disabled', true)
        agesAccounts[6].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2016)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]

        if(usd){
            agesAccounts[7].style.display = 'flex'
            available[7].innerHTML = usd.length
        }else{
            agesAccounts[7].style.display = 'flex'
            amountPurchase[7].value = 0
            amountPurchase[7].setAttribute('disabled', true)
            agesAccounts[7].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[7].style.display = 'flex'
        amountPurchase[7].value = 0
        amountPurchase[7].setAttribute('disabled', true)
        agesAccounts[7].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2015)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]

        if(usd){
            agesAccounts[8].style.display = 'flex'
            available[8].innerHTML = usd.length
        }else{
            agesAccounts[8].style.display = 'flex'
            amountPurchase[8].value = 0
            amountPurchase[8].setAttribute('disabled', true)
            agesAccounts[8].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[8].style.display = 'flex'
        amountPurchase[8].value = 0
        amountPurchase[8].setAttribute('disabled', true)
        agesAccounts[8].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
    get(child(stt, 'ageFacebookAccounts/' + 2014)).then( async (snapshot) => {
        if(snapshot.exists()) {         
        
        let usd = await Object.values(snapshot.val())[0]
        if(usd){
            agesAccounts[9].style.display = 'flex'
            available[9].innerHTML = usd.length
        }else{
            agesAccounts[9].style.display = 'flex'
            amountPurchase[9].value = 0
            amountPurchase[9].setAttribute('disabled', true)
            agesAccounts[9].innerHTML = `Not Available Come Back in 24 hours`
            }

                
        }else{
        agesAccounts[9].style.display = 'flex'
        amountPurchase[9].value = 0
        amountPurchase[9].setAttribute('disabled', true)
        agesAccounts[9].innerHTML = `Not Available Come Back in 24 hours`
        }
    
                
    })
}


export { accountFacebookPrices, quantityFacebook }





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



  let current = 0;

  let year = 2024;

export function ageProduct(uid, get, child, stt, update, ref, database, nextSibling, input, btnValue){
    let idNo = null;
    if(btnValue === 1){
        oneYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime, location, oneYearFacebookPrice)
    } else if(btnValue === 2){
        twoYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime, location, twoYearFacebookPrice)
    }else if(btnValue === 3){           
        threeYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, threeYearFacebookPrice)
    }else if(btnValue === 4){            
        fourYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, fourYearFacebookPrice)
    }else if(btnValue === 5){
        fiveYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, fiveYearFacebookPrice)
    }else if(btnValue === 6){        
        sixYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, sixYearFacebookPrice)
    }else if(btnValue === 7){
        sevenYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, sevenYearFacebookPrice)
    }else if(btnValue === 8){
        eightYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, eightYearFacebookPrice)         
    }else if(btnValue === 9){
        nineYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, nineYearFacebookPrice)           
    }else if(btnValue === 10){
        tenYearFacebook(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, tenYearFacebookPrice)
    }

}
