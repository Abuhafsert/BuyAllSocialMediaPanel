import { showHideUserTwitter, showHideUserTiktok, showHideUserFacebook, showHideUserFaq } from "../AllSocialPanel/twitterToggle.js"
let divs = document.createElement('div')

let div = document.querySelector('.div')
divs.innerHTML = `        <div class="div">
<div class="allsocial-list">
    <div class="Logo">
        <img src="/main/img/logo_trial (1).png" alt="">
        </i>
    </div>
    <div class="balance">
        <div class="accountbalance">
            
            <p>
                Accont Balance
                </p>
        </div>
        <div class="listnaira">
            <span>≈ NGN
                <span id="listnair"></span>
            </span>
        </div>
    </div>
    <ul>
        <li>
            <div class="home">
                <i class="fa-solid fa-house-user"></i>
                <a href="/main/" >HOME</a>
            </div>
        </li>
        <li class="instagram" >
            <div class="list-items">
            <span>
                    <i class="fa-brands fa-square-instagram"></i>
                    <p>INSTAGRAM</p>
                    </span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="description-listInsta">
                <ul>
                <li><a href="/main/monthlyAccounts/monthlyInstagram.html">Monthly Accounts</a></li>
                <li><a href="/main/monthlyAccounts/monthlyWithFollowers.html">Monthly With Followers</a></li>
                <li><a href="/main/InstagramProduct/ageAccounts.html">Age Accounts</a></li>
                <li><a href="/main/InstagramProduct/withFollower/ageWithFollowers.html">Age With Followers</a></li>
                <li><a href="/main/InstagramProduct/ageWithPost.html">Age With Post</a></li>
                <li><a href="/main/InstagramProduct/withFollower/ageWithFollowersAndPost.html">Age With Post And Followers</a></li>
                <li><a href="/main/InstagramProduct/referral.html">Referral Accounts</a></li>
                <li><a href="/main/InstagramProduct/withFollower/referralWithFollowers.html">Referral Accounts With Followers</a></li>
                </ul>
            </div>
        </li>
        <li class="tiktok">
            <div class="list-items">
                <span>
                    <i class="fa-brands fa-tiktok"></i>
                    <P>TIKTOK</P>
                </span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="description-listTiktok">
            <ul>
                <li><a href="/main/tikTokProducts/monthly.html">Monthly Accounts</a></li>
                <li><a href="/main/tikTokProducts/ages.html">Age Tiktok Accounts</a></li>
            </ul>
        </div>
        </li>
        <li class="twitter">
            <div class="list-items">
                <span>
                    <i class="fa-brands fa-square-x-twitter"></i>
                    <P>TWITTER</P>
                </span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="description-listTwitter">
                <ul>
                    <li><a href="/main/twitterProducts/twitterNewAccounts.html">Monthly Accounts</a></li>
                    <li><a href="/main/twitterProducts/twittermonthlyAccountsWithFollowers.html">Monthly With Followers</a></li>
                    <li><a href="/main/twitterProducts/twitterAge.html">Age Twitter Accounts</a></li>
                    <li><a href="/main/twitterProducts/twitterAgeWithFollowers.html">Age Twitter With Followers</a></li>
                </ul>
            </div>
        </li>
            <li class="facebook">
                <div class="list-items">
                    <span>
                    <i class="fa-brands fa-square-facebook"></i>
                    <P>FACEBOOK</P>
                    </span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="description-listFacebook">
                    <ul>
                        <li><a href="/main/faceBookProducts/monthly.html">Monthly Accounts</a></li>
                        <li><a href="/main/faceBookProducts/ages.html">Age Facebook Accounts</a></li>
                    </ul>
                </div>  
            </li>
            <li class="youtube">
            <div class="list-items">
            <span>
            <i class="fa-brands fa-youtube"></i>
            <P>YOUTUBE</P>
            </span>
            <i class="fa-solid fa-chevron-right"></i>
            </div>
            </li>
            </ul>
            <div class="show-more-header">
            <div class="show-more">
            <p>
            Show more
            </p>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
    <div class="notifications">
        <ul>
            <li><a href="">
            <i class="fa-solid fa-bell"></i>
            <p>
            notifications
            </p>
            </a></li>
            <li><a href="" class="logout">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <p>
            Logout
            </p>
            </a></li>
        </ul>
    </div>
</div>
</div>

<section>
<div class="body-containers">
    <div class="body-headers">
        <i class="fa-solid fa-bars"></i>
        <div class="balance" id="userbalance">
            <h6>
                Wellcome
            </h6>  
            <div>
                <p>
                    Your Balance
                </p>
            </div>
            <div class="listnaira">
                <span>
                    ≈ NGN
                    <span id="listnair"></span>
                </span>
            </div>
        </div>
    </div>
 
    `

    // "/main/monthlyAccounts/monthlyInstagram.html"
    // "/main/monthlyAccounts/monthlyWithFollower.html"
document.body.prepend(divs)
  // Import the functions you need from the SDKs you need

  let youtube = document.querySelector('.youtube')

  youtube.addEventListener('click', ()=>{
    alert('Not Yet Uploaded')
  })

  let chevronRightFacebook = document.querySelector('.facebook .fa-chevron-right')
  let headerFacebook = document.querySelector(".description-listFacebook")
  let listFacebook = document.querySelector('.facebook .list-items')

  let facebook = document.querySelector('.facebook')

  facebook.addEventListener('click', ()=>{
    showHideUserFacebook(headerFacebook, listFacebook,chevronRightFacebook)
})


  let chevronRightTiktok = document.querySelector('.tiktok .fa-chevron-right')
  let headerTiktok = document.querySelector(".description-listTiktok")
  let listTiktok = document.querySelector('.tiktok .list-items')

  let tiktok = document.querySelector('.tiktok')

  tiktok.addEventListener('click', ()=>{
    showHideUserTiktok(headerTiktok, listTiktok,chevronRightTiktok)
})




  let chevronRightTwitter = document.querySelector('.twitter .fa-chevron-right')
  let headerTwitter = document.querySelector(".description-listTwitter")
  let listTwitter = document.querySelector('.twitter .list-items')
  
  let twitter = document.querySelector('.twitter')
  
  twitter.addEventListener('click', ()=>{
      showHideUserTwitter(headerTwitter, listTwitter,chevronRightTwitter)
  })
  
  

     
    
  let chevronRightInsta = document.querySelector('.instagram .fa-chevron-right')
  let header = document.querySelector(".description-listInsta")
  let listInsta = document.querySelector('.instagram .list-items')
  function showHideUser() {
      setTimeout(function(){
          header.classList.toggle("hide")
          if(header.className === 'description-listInsta hide'){
              listInsta.style.borderRadius = '5px 5px 0 0'
              chevronRightInsta.style.transform = 'rotate(90deg)'
          }else{
              listInsta.style.borderRadius = '5px'
              chevronRightInsta.style.transform = 'rotate(0)'
  
          }
      }, 200)
  }
  
  
  let bodyContainers = document.querySelector('.body-containers')
  let bodyHeaders = document.querySelector('.body-headers')
  let menuBarShow = document.querySelector('.allsocial-list')
  let balanceFlex = document.querySelector('.body-containers .body-headers .balance')
  setTimeout(()=>{
  },500)
  let bars = document.querySelector('.fa-bars')
  function menuBar() {
      
      menuBarShow.classList.toggle('hides')
      menuBarShow.style.transform = 'translate(0px)'
      if(menuBarShow.className !== 'allsocial-list hides'){
          bodyHeaders.style.justifyContent = 'space-between'
          balanceFlex.style.display = 'flex'
      }else {
          bodyHeaders.style.justifyContent = 'end'
          balanceFlex.style.display = 'none'
  
      }
  }
  
  
  let instagram = document.querySelector('.instagram')
  // const stt = ref(database)



  
  instagram.addEventListener('click', showHideUser)
  bars.addEventListener('click', menuBar)
  
  let showNotify = document.querySelector('.notifications')
  
  function showNotification(){
      showNotify.classList.toggle('hide')
  }
  
  let showMore = document.querySelector('.show-more')
  showMore.addEventListener('click', showNotification)
  
  
  let logOut = document.querySelector('.logout')
  
  logOut.addEventListener('click', (e)=>{
      e.preventDefault()
      signOut(auth)
      window.location.replace('/main/signIn-signUp/signIn.html')
  })


  let rss = document.createElement('div')
  rss.innerHTML = 
  `
  <header class="faq-header">
  <div class="faq">
      <h4>
          FAQ
      </h4>
      <p>
          AllSocialMediaPanel makes it safe to buy all social media 
          from our platform buy securing your payment and guaranteeing 
          good service.
      </p>
  </div>
  <ul>
      <li>
          <div class="socialmedia">
              <h5>
                  where to purchase social media accounts?
                  <i class="fa-solid fa-chevron-right"></i>
              </h5>
          </div>
          <p class="answer1">
              there are many agencies whom social media can be bought
              or purchased online. one of the best agencies or platform 
              is AllSocialMediaPanel with 100% guaranty safe and secure.
          </p>
      </li>
      <li>
          <div class="socialmedia">
              <h5>
                  where to contacts us?
                  <i class="fa-solid fa-chevron-right"></i>
              </h5>
          </div>
          <p class="answer2">
              the only way to contacts AllSocialMediaPanel
              is via whatsApp 
          </p>
      </li>
      <li>
          <div class="socialmedia" value="1">
              <h5>
                  how much to buy social media accounts on this page?
                  <i class="fa-solid fa-chevron-right"></i>
              </h5>
          </div>
          <p class="answer3">
              the cost depend on the years and number of followers. 
              however the minimum price in this page is between 100 to 500.
              maximum depend on your need.
          </p>
      </li>
  </ul>
</header>
<div class="rss endpoint">
  <h5>
      © Copyright 2023. All right Reserved by AllSocialMediaPanel
  </h5>
</div>
  `
  let socialmedias = rss.querySelectorAll('.socialmedia')
  socialmedias.forEach(socialmedia =>{
      socialmedia.addEventListener('click', (e)=>{
          showHideUserFaq(socialmedia.nextElementSibling, socialmedia.lastElementChild)
    })
  })


  export { divs, rss }