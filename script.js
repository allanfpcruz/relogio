const hour = document.querySelector('#hour-container')
const minute = document.querySelector('#minut-container')
const second = document.querySelector('#second-container')

const relogio = setInterval( function getTime() {
    let now = new Date()

    if(now.getHours() < 10) {
        hour.innerHTML = `0${now.getHours()}`
    } else {
        hour.innerHTML = now.getHours()
    }

    if(now.getMinutes() < 10) {
        minute.innerHTML = `0${now.getMinutes()}`
    } else {
        minute.innerHTML = now.getMinutes()
    }

    if(now.getSeconds() < 10) {
        second.innerHTML = `0${now.getSeconds()}`
    } else {
        second.innerHTML = now.getSeconds()
    }

})