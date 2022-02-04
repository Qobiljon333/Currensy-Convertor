let inputNumber = document.querySelector('.input_number')

let dollor = document.querySelector('.dollor')
let rubl = document.querySelector('.rubl')

let dollorKurs = 10800
let rublKurs = 140

let dollortoRubl = 76.01

let rubltoDollor = 0.01
// dollor
let sum 
// inputNumber.addEventListener('input', (event)=>{
//     let inputValue = event.target.value 
//     dollor.innerHTML = (inputValue / dollorKurs).toFixed(2)
//     rubl.innerHTML = (inputValue / rublKurs).toFixed(2)
// })

let forDollor = document.querySelector('.dollorbtn')
let forRubl = document.querySelector('.rublbtn')
let forSum = document.querySelector('.sumbtn')
let pulBirligi1 = document.querySelector('.pulbirligi1')
let pulBirligi2 = document.querySelector('.pulbirligi2')
let clear = document.querySelector('.clear')


// clear.addEventListener('click', ()=>{
// // let inputValue = inputNumber.value
// inputValue.innerHTML = ' '

// })

forSum.addEventListener('click', ()=> {
let inputValue = inputNumber.value

    pulBirligi1.innerHTML = "Dollor"
    pulBirligi2.innerHTML = "Rubl"
    dollor.innerHTML = (inputValue / dollorKurs).toFixed(2)
    rubl.innerHTML = (inputValue * (7577.34 / 1080000)).toFixed(2)

})

forDollor.addEventListener('click', ()=> {
let inputValue = inputNumber.value

    pulBirligi1.innerHTML = "So`m"
    pulBirligi2.innerHTML = "Rubl"
    dollor.innerHTML = (inputValue * dollorKurs).toFixed(2)
    rubl.innerHTML = (inputValue * (75961.00 / 1000)).toFixed(2)

})

forRubl.addEventListener('click', ()=> {
let inputValue = inputNumber.value

    pulBirligi1.innerHTML = "So`m"
    pulBirligi2.innerHTML = "Dollor"
    dollor.innerHTML = (inputValue * (142507.34 / 1000)).toFixed(2)
    rubl.innerHTML = (inputValue * (13.16 / 1000)).toFixed(2)

})


