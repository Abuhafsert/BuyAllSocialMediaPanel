let date = new Date().getFullYear()
let dates = new Date().getMonth()+1
let dat = new Date().getDate()
// let hour = roundingUP(hours)
let month = roundingUP(dates)
let day = roundingUP(dat)
let da = `${date}-${month}-${day}`


function roundingUP(time){
    return time < 10 ? `0${time}` : time
}

let total = new Date()
let local = (total) / 1000;


let days = Math.floor(local / 3600 / 24);
let hours = Math.floor(local / 3600) % 24;
let minutes = Math.floor(local / 60) % 60;

let seconds = Math.floor(local) % 60;
let hour = roundingUP(hours)
let minute = roundingUP(minutes)
let second = roundingUP(seconds)
let times = `${hour}-${minute}-${second}`
let dayTime = `${da}<br>${times}`
// console.log(dayTime)



// setInterval(countDown, 1000)




function sleep(s){
    return new Promise(resolve => setTimeout(resolve, s))
}

export { sleep, dayTime }