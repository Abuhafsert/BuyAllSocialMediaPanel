

function showHideUserTwitter(header, listTwitter, chevronRightTwitter) {
    setTimeout(function(){
        header.classList.toggle("hide")
        if(header.className === 'description-listTwitter hide'){
            listTwitter.style.borderRadius = '5px 5px 0 0'
            chevronRightTwitter.style.transform = 'rotate(90deg)'
        }else{
            listTwitter.style.borderRadius = '5px'
            chevronRightTwitter.style.transform = 'rotate(0)'

        }
    }, 200)
}


function showHideUserTiktok(headerTiktok, listTiktok, chevronRightTiktok) {
    setTimeout(function(){
        headerTiktok.classList.toggle("hide")
        if(headerTiktok.className === 'description-listTiktok hide'){
            listTiktok.style.borderRadius = '5px 5px 0 0'
            chevronRightTiktok.style.transform = 'rotate(90deg)'
        }else{
            listTiktok.style.borderRadius = '5px'
            chevronRightTiktok.style.transform = 'rotate(0)'

        }
    }, 200)
}


function showHideUserFacebook(headerFacebook, listFacebook, chevronRightFacebook) {
    setTimeout(function(){
        headerFacebook.classList.toggle("hide")
        if(headerFacebook.className === 'description-listFacebook hide'){
            listFacebook.style.borderRadius = '5px 5px 0 0'
            chevronRightFacebook.style.transform = 'rotate(90deg)'
        }else{
            listFacebook.style.borderRadius = '5px'
            chevronRightFacebook.style.transform = 'rotate(0)'

        }
    }, 200)
}
function showHideUserFaq(headerFaq, chevronRightFaq) {
    setTimeout(function(){
        headerFaq.classList.toggle("hidefaq")
        if(headerFaq.className === 'answer hidefaq'){
            // listFacebook.style.borderRadius = '5px 5px 0 0'
            chevronRightFaq.style.transform = 'rotate(90deg)'
        }else{
            // listFacebook.style.borderRadius = '5px'
            chevronRightFaq.style.transform = 'rotate(0)'

        }
    }, 200)
}


export { showHideUserTwitter, showHideUserTiktok, showHideUserFacebook, showHideUserFaq }