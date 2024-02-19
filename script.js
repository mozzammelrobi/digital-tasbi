const displayValue = document.getElementById('displayValue')
const incrementBtn = document.getElementById('incrementBtn')
const decrementBtn = document.getElementById('decrementBtn')

let value = 0 ;


incrementBtn.addEventListener('click', function(){

    if(value == 33){
        return alert('thirty times complete please another')
    }
    value += 1
    displayValue.innerText = value;
})

decrementBtn.addEventListener('click', function(){
    if(value == 0){
        return alert('you cant probite nagative')
    }
    value -= 1 
    displayValue.innerText = value;
})



document.getElementById('reset').addEventListener('click', function(){
    displayValue.innerText = 0;
    value = 0;
})