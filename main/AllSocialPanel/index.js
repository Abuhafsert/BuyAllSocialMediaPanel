import { ref,child, set, get, remove, update,auth, database, stt, onAuthStateChanged, signOut } from "../user.js";
import { orders } from "../order/order.js";
import { referralProduct, kloop, btn, amount } from "../InstagramProduct/referral.js";
import { accountPrices, quantity } from "../InstagramProduct/age.js";
import { accountPricesWithPost, quantityWithPost } from "../InstagramProduct/ageWithPost.js";
import { accountPricesTwitter, quantityTwitter } from "../twitterProducts/twitterAge.js";
import { quantityTwitterNew, twitterNewPrice } from "../twitterProducts/twitternew.js";
import { payWithPaystack, paymentForm } from "../addFund/fund.js";
import { divs, rss } from "../uploadingAccounts/testing.js";
import { monthlyProductWithFollowers, monthlyinstaWithFollowers } from "../monthlyAccounts/monthlyWithFollower.js";
import { monthlyProductNoFollowers, monthlyinstaNoFollowers } from "../monthlyAccounts/monthlyInstagram.js";
import { referralProductWithFollowers, referralinstaWithFollowers } from "../InstagramProduct/withFollower/referrallWithFollower.js";
import { ageProductWithFollowers, ageinstaWithFollowers } from "../InstagramProduct/withFollower/ageWithFollower.js";
import { ageProductWithFollowersAndPost, ageinstaWithFollowersAndPost } from "../InstagramProduct/withFollower/ageWithFollowersAndPost.js";
import { ageTiktokProductWithFollowers, ageTiktokWithFollowers } from "../tikTokProducts/ages.js";
import { monthlyTiktokProductWithFollowers, monthlyTiktokWithFollowers } from "../tikTokProducts/monthly.js";
import { accountFacebookPrices, quantityFacebook } from "../faceBookProducts/ages.js";
import { monthlyFacebookProduct, quantitymonthlyFacebook } from "../faceBookProducts/monthly.js";
import { monthlyTwitterProductWithFollowers, monthlyTwitterWithFollowers } from "../twitterProducts/twitterMonthlyWithFollowers.js";
import { ageTwitterProductWithFollowers, ageTwitterWithFollowers } from "../twitterProducts/twitterAgeWIthFollowers.js";

let topContainer = document.querySelector('.top-container')
document.body.prepend(divs)
document.body.append(rss)






let username = document.querySelector('#userbalance h6')
console.log()
let userBalances = document.querySelectorAll('#listnair')
const balance = (uid) => {
    get(child(stt, 'users/' + uid )).then((snapshot) => {
    let usd = Object.values(snapshot.val())[0]
    let usernamed = Object.values(snapshot.val())[5]

    userBalances.forEach(userBalance =>{
        userBalance.innerHTML = parseFloat(usd).toFixed(2)
    })
    username.innerHTML = 'Welcome ' +  usernamed + '!'
    })
    
}


onAuthStateChanged(auth, (user) => {
    if ((user && user.emailVerified)) {
        console.log(user)
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        // emailed(uid)
        balance(uid)
        orders(stt, uid, get, child)
        
        if(window.location.pathname === '/main/InstagramProduct/referral.html'){
            kloop(get, child, stt)
            referralProduct(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/tikTokProducts/ages.html'){
            ageTiktokWithFollowers(get, child, stt)
            ageTiktokProductWithFollowers(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/faceBookProducts/ages.html'){
            quantityFacebook(get, child, stt)
            accountFacebookPrices(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/faceBookProducts/monthly.html'){
            quantitymonthlyFacebook(get, child, stt)
            monthlyFacebookProduct(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/tikTokProducts/monthly.html'){
            monthlyTiktokWithFollowers(get, child, stt)
            monthlyTiktokProductWithFollowers(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/InstagramProduct/withFollower/ageWithFollowersAndPost.html'){
            ageinstaWithFollowersAndPost(get, child, stt)
            ageProductWithFollowersAndPost(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/InstagramProduct/withFollower/ageWithFollowers.html'){
            ageinstaWithFollowers(get, child, stt)
            ageProductWithFollowers(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/InstagramProduct/withFollower/referralWithFollowers.html'){
            referralinstaWithFollowers(get, child, stt)
            referralProductWithFollowers(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/monthlyAccounts/monthlyWithFollowers.html'){
            monthlyinstaWithFollowers(get, child, stt)
            monthlyProductWithFollowers(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/monthlyAccounts/monthlyInstagram.html'){
            monthlyinstaNoFollowers(get, child, stt)
            monthlyProductNoFollowers(uid, get, child, stt, update, ref, database)
        }
        if(window.location.pathname === '/main/InstagramProduct/ageAccounts.html'){
            accountPrices(uid, get, child, stt, update, ref, database)
            quantity(get, child, stt)
        }else
        if(window.location.pathname === '/main/InstagramProduct/ageWithPost.html'){
            accountPricesWithPost(uid, get, child, stt, update, ref, database)
            quantityWithPost(get, child, stt)
        }


        if(window.location.pathname === '/main/twitterProducts/twitterAge.html'){
            accountPricesTwitter(uid, get, child, stt, update, ref, database)
            quantityTwitter(get, child, stt)
        }else
        if(window.location.pathname === '/main/twitterProducts/twitterNewAccounts.html'){
            twitterNewPrice(uid, get, child, stt, update, ref, database)
            quantityTwitterNew(get, child, stt)
        }
        if(window.location.pathname === '/main/twitterProducts/twittermonthlyAccountsWithFollowers.html'){
            monthlyTwitterProductWithFollowers(uid, get, child, stt, update, ref, database)
            monthlyTwitterWithFollowers(get, child, stt)
        }
        if(window.location.pathname === '/main/twitterProducts/twitterAgeWithFollowers.html'){
            ageTwitterProductWithFollowers(uid, get, child, stt, update, ref, database)
            ageTwitterWithFollowers(get, child, stt)
        }
        if(window.location.pathname === '/main/addFund/fund.html'){
            paymentForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                get(child(stt, 'mukulli/' )).then((snapshot) => {
                    let usd = Object.values(snapshot.val())[0]
                    payWithPaystack(update, ref, database, uid, child, stt, get, user, usd)
                })
            }, false);
            
        }


        console.log(window.location.pathname)
        
        
        // ...
} else {    
        
    window.location.replace('/main/signIn-signUp/signIn.html')
    }

// ...
});





let logOut = document.querySelector('.logout')

logOut.addEventListener('click', (e)=>{
    e.preventDefault()
    signOut(auth)
    window.location.replace('/main/signIn-signUp/signIn.html')
})
