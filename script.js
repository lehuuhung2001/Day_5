var dkey = document.querySelector('.key p:last-child')
var dsite = document.querySelector('.site p:last-child')
var dwhich = document.querySelector('.which p:last-child')
var dcode = document.querySelector('.code p:last-child')
var container = document.querySelector('.container')
var press = document.querySelector('.press')
var result = document.querySelector('.result')
console.log(container)
document.addEventListener('keydown' , ((e) => {
    // console.log(e.key)
    console.log(e)
    dkey.innerText = e.key
    dsite.innerText = e.location
    dwhich.innerText= e.which
    dcode.innerText = e.code
    result.innerText= e.key.toUpperCase()
    press.classList.add('hide')
    container.classList.add('show')
}))