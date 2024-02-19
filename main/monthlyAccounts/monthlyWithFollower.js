import { monthly1000, monthly2000, monthly3000, monthly4000, monthly5000 } from "./monthly/monthlyWithFollowers.js"
import { sleep, dayTime } from "../AllSocialPanel/dayTime.js"
import { monthlyProductWithFollowers1000,
    monthlyProductWithFollowers2000,
    monthlyProductWithFollowers3000,
    monthlyProductWithFollowers4000,
    monthlyProductWithFollowers5000,
 } from "../pricesAccounts/priceAccount.js";

let btns = document.querySelectorAll('.Btn-products');
let  prices = document.querySelectorAll('.prices')
let amount = document.querySelectorAll('.amount-purchase')
let pricePerAccount = null;




let location = '/main/order/order.html'


const monthlyProductWithFollowers = (uid, get, child, stt, update, ref, database)=>{
    btns.forEach(btn => {
        let amountValue = btn.parentElement.parentElement.parentElement
        let btnValue = btn.parentElement.parentElement.parentElement.value;
        if(btnValue === 1){
            pricePerAccount = monthlyProductWithFollowers1000
            prices[0].innerHTML = pricePerAccount * amount[0].value
            onInput(pricePerAccount, btnValue)
            }else if(btnValue === 2){
                pricePerAccount = monthlyProductWithFollowers2000
                prices[1].innerHTML = pricePerAccount * amount[1].value
                onInput(pricePerAccount, btnValue)
                
            }else if(btnValue === 3){
                pricePerAccount = monthlyProductWithFollowers3000
                prices[2].innerHTML = pricePerAccount * amount[2].value
                onInput(pricePerAccount, btnValue)
                
                
            }else if(btnValue === 4){
                pricePerAccount = monthlyProductWithFollowers4000
                prices[3].innerHTML = pricePerAccount * amount[3].value
                
                onInput(pricePerAccount, btnValue)
            }else if(btnValue === 5){
                pricePerAccount = monthlyProductWithFollowers5000
                prices[4].innerHTML = pricePerAccount * amount[4].value
                
                onInput(pricePerAccount, btnValue)
            // }else if(btnValue === 6){
            //     pricePerAccount = sixYearInstagramPriceWithPost
            //     prices[5].innerHTML = pricePerAccount * amount[5].value
                
            //     onInput(pricePerAccount, btnValue)
            // }else if(btnValue === 7){
            //     pricePerAccount = sevenYearInstagramPriceWithPost
            //     prices[6].innerHTML = pricePerAccount * amount[6].value
            //     onInput(pricePerAccount, btnValue)
                
            // }else if(btnValue === 8){
            //     pricePerAccount = eightYearInstagramPriceWithPost
            //     prices[7].innerHTML = pricePerAccount * amount[7].value
                
            //     onInput(pricePerAccount, btnValue)
            // }else if(btnValue === 9){
            //     pricePerAccount = nineYearInstagramPriceWithPost
            //     prices[8].innerHTML = pricePerAccount * amount[8].value
                
            //     onInput(pricePerAccount, btnValue)
            // }else if(btnValue === 10){
            //     pricePerAccount = tenYearInstagramPriceWithPost
            //     prices[9].innerHTML = pricePerAccount * amount[9].value
                
            //     onInput(pricePerAccount, btnValue)
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
                // console.log(parseFloat(quantity.innerHTML) > amounts.value)
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
            // }else if(amountValue.value === 6 && btnValue === 6){
            //     if(amounts.value > parseFloat(quantity.innerHTML)){
            //         amounts.value = parseFloat(quantity.innerHTML)
            //     }
            //     price.innerHTML = pricePerAccount * amounts.value
            // }else if(amountValue.value === 7 && btnValue === 7){
            //     if(amounts.value > parseFloat(quantity.innerHTML)){
            //         amounts.value = parseFloat(quantity.innerHTML)
            //     }
            //     price.innerHTML = pricePerAccount * amounts.value
            // }else if(amountValue.value === 8 && btnValue === 8){
            //     if(amounts.value > parseFloat(quantity.innerHTML)){
            //         amounts.value = parseFloat(quantity.innerHTML)
            //     }
            //     price.innerHTML = pricePerAccount * amounts.value
            // }else if(amountValue.value === 9 && btnValue === 9){
            //     if(amounts.value > parseFloat(quantity.innerHTML)){
            //         amounts.value = parseFloat(quantity.innerHTML)
            //     }
            //     price.innerHTML = pricePerAccount * amounts.value
            // }else if(amountValue.value === 10 && btnValue === 10){
            //     if(amounts.value > parseFloat(quantity.innerHTML)){
            //         amounts.value = parseFloat(quantity.innerHTML)
            //     }
            //     price.innerHTML = pricePerAccount * amounts.value
            }
        })
    })

}

let available = document.querySelectorAll('.Available-pieces')
let agesAccounts = document.querySelectorAll('.referral-accounts')
let amountPurchase = document.querySelectorAll('.amount-purchase')

function monthlyinstaWithFollowers(get, child, stt){
    let array = []
    
    get(child(stt, 'monthlyinstaWithFollowers/' + 1000)).then( async (snapshot) => {
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
    get(child(stt, 'monthlyinstaWithFollowers/' + 2000)).then( async (snapshot) => {
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
    get(child(stt, 'monthlyinstaWithFollowers/' + 3000)).then( async (snapshot) => {
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
    get(child(stt, 'monthlyinstaWithFollowers/' + 4000)).then( async (snapshot) => {
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
    get(child(stt, 'monthlyinstaWithFollowers/' + 5000)).then( async (snapshot) => {
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
    // get(child(stt, 'products/' + 2018)).then( async (snapshot) => {
    //     if(snapshot.exists()) {         
        
    //     let usd = await Object.values(snapshot.val())[0]
  
    //     if(usd){
    //         agesAccounts[5].style.display = 'flex'
    //         available[5].innerHTML = usd.length
    //     }else{
    //         agesAccounts[5].style.display = 'flex'
    //         amountPurchase[5].value = 0
    //         amountPurchase[5].setAttribute('disabled', true)
    //         agesAccounts[5].innerHTML = `Not Available Come Back in 24 hours`
    //         }

                
    //     }else{
    //     agesAccounts[5].style.display = 'flex'
    //     amountPurchase[5].value = 0
    //     amountPurchase[5].setAttribute('disabled', true)
    //     agesAccounts[5].innerHTML = `Not Available Come Back in 24 hours`
    //     }
    
                
    // })
    // get(child(stt, 'ageAccountsWithPost/' + 2017)).then( async (snapshot) => {
    //     if(snapshot.exists()) {         
        
    //     let usd = await Object.values(snapshot.val())[0]
  
    //     if(usd){
    //         agesAccounts[6].style.display = 'flex'
    //         available[6].innerHTML = usd.length
    //     }else{
    //         agesAccounts[6].style.display = 'flex'
    //         amountPurchase[6].value = 0
    //         amountPurchase[6].setAttribute('disabled', true)
    //         agesAccounts[6].innerHTML = `Not Available Come Back in 24 hours`
    //         }

                
    //     }else{
    //     agesAccounts[6].style.display = 'flex'
    //     amountPurchase[6].value = 0
    //     amountPurchase[6].setAttribute('disabled', true)
    //     agesAccounts[6].innerHTML = `Not Available Come Back in 24 hours`
    //     }
    
                
    // })
    // get(child(stt, 'ageAccountsWithPost/' + 2016)).then( async (snapshot) => {
    //     if(snapshot.exists()) {         
        
    //     let usd = await Object.values(snapshot.val())[0]

    //     if(usd){
    //         agesAccounts[7].style.display = 'flex'
    //         available[7].innerHTML = usd.length
    //     }else{
    //         agesAccounts[7].style.display = 'flex'
    //         amountPurchase[7].value = 0
    //         amountPurchase[7].setAttribute('disabled', true)
    //         agesAccounts[7].innerHTML = `Not Available Come Back in 24 hours`
    //         }

                
    //     }else{
    //     agesAccounts[7].style.display = 'flex'
    //     amountPurchase[7].value = 0
    //     amountPurchase[7].setAttribute('disabled', true)
    //     agesAccounts[7].innerHTML = `Not Available Come Back in 24 hours`
    //     }
    
                
    // })
    // get(child(stt, 'ageAccountsWithPost/' + 2015)).then( async (snapshot) => {
    //     if(snapshot.exists()) {         
        
    //     let usd = await Object.values(snapshot.val())[0]

    //     if(usd){
    //         agesAccounts[8].style.display = 'flex'
    //         available[8].innerHTML = usd.length
    //     }else{
    //         agesAccounts[8].style.display = 'flex'
    //         amountPurchase[8].value = 0
    //         amountPurchase[8].setAttribute('disabled', true)
    //         agesAccounts[8].innerHTML = `Not Available Come Back in 24 hours`
    //         }

                
    //     }else{
    //     agesAccounts[8].style.display = 'flex'
    //     amountPurchase[8].value = 0
    //     amountPurchase[8].setAttribute('disabled', true)
    //     agesAccounts[8].innerHTML = `Not Available Come Back in 24 hours`
    //     }
    
                
    // })
    // get(child(stt, 'ageAccountsWithPost/' + 2014)).then( async (snapshot) => {
    //     if(snapshot.exists()) {         
        
    //     let usd = await Object.values(snapshot.val())[0]
    //     if(usd){
    //         agesAccounts[9].style.display = 'flex'
    //         available[9].innerHTML = usd.length
    //     }else{
    //         agesAccounts[9].style.display = 'flex'
    //         amountPurchase[9].value = 0
    //         amountPurchase[9].setAttribute('disabled', true)
    //         agesAccounts[9].innerHTML = `Not Available Come Back in 24 hours`
    //         }

                
    //     }else{
    //     agesAccounts[9].style.display = 'flex'
    //     amountPurchase[9].value = 0
    //     amountPurchase[9].setAttribute('disabled', true)
    //     agesAccounts[9].innerHTML = `Not Available Come Back in 24 hours`
    //     }
    
                
    // })
}


export { monthlyProductWithFollowers, monthlyinstaWithFollowers }





let userBalancess = document.querySelectorAll('#listnair')
let username = document.querySelector('#userbalance h6')
        

const balance = (uid,
     balanceAmount, 
     update, ref, 
     database) => { 
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
        monthly1000(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime, location, monthlyProductWithFollowers1000)
    } else if(btnValue === 2){
        monthly2000(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime, location, monthlyProductWithFollowers2000)
    }else if(btnValue === 3){           
        monthly3000(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, monthlyProductWithFollowers3000)
    }else if(btnValue === 4){            
        monthly4000(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, monthlyProductWithFollowers4000)
    }else if(btnValue === 5){
        monthly5000(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, monthlyProductWithFollowers5000)
    // }else if(btnValue === 6){        
    //     sixYear(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, sixYearInstagramPriceWithPost)
    // }else if(btnValue === 7){
    //     sevenYear(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, sevenYearInstagramPriceWithPost)
    // }else if(btnValue === 8){
    //     eightYear(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, eightYearInstagramPriceWithPost)         
    // }else if(btnValue === 9){
    //     nineYear(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, nineYearInstagramPriceWithPost)           
    // }else if(btnValue === 10){
    //     tenYear(uid, get, child, stt, update, ref, database, nextSibling, input, idNo, current, dayTime,location, tenYearInstagramPriceWithPost)
    }

}


