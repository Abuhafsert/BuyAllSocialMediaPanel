import { sleep } from "../AllSocialPanel/dayTime.js";






const paymentForm = document.getElementById('paymentForm');

async function payWithPaystack(update, ref, database, uid, child, stt, get, user, key) {
  
  if(document.getElementById("fund-input").value < 100){
    alert('minimum amount is 100.00')
  }else{
    if(user){
  
      
      let handler = PaystackPop.setup({
      
          key, // Replace with your public key
          // key: 'pk_live_cc7607620cf3e0a5a3dadd05ba717e23f4a7ce02', // Replace with your public key
          email: user.email,
          amount: document.getElementById("fund-input").value * 100,
          ref: 'ptk'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email"
          onClose: function(){
                  alert('Window closed.');
              },
              callback: function(response){
                      let message = 'Payment complete! of: ' + document.getElementById("fund-input").value;
                      alert(message);
                      res(response, update, ref, database, uid, child, stt, get)
              
                  },
              });
              
              handler.openIframe();
      }
  }

};

export { paymentForm, payWithPaystack}


   


const res = (response, update, ref, database, uid, child, stt, get) =>{
    if(response.status === "success"){
        get(child(stt, 'users/' + uid)).then( async (snapshot) => {
            // if(snapshot.exists()) {
        let usd = await Object.values(snapshot.val())[0]
        let balance = (Number(usd) + Number(document.getElementById("fund-input").value))
        update(ref(database, 'users/' + uid),{
            balance: balance.toFixed(2),
          })
    })
              
    }
}