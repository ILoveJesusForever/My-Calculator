const btns = document.querySelectorAll('.btns');
const equals = document.querySelector('#equals');
const allClear = document.querySelector('#all-clear');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const deleteDisplay = document.querySelector('#del');





function btnsValue(){
   btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num;
        current.value += value;
        if(value === '/'){
            current.innerHTML = '÷';
        }
        })
    }) 
}

function clearAll(){
    allClear.addEventListener('click', () => {
        if(current.value && previous.value === ''){
            current.value = '';
            previous.value = '';
        }
        else{
            current.value = '';
            previous.value = '';
        }
       
    })
}



function deleteCurrent(){
    deleteDisplay.addEventListener('click', () => {
        if(current.value === ''){
            previous.value = '';
        }
        else{
            current.value = '';
        }
    })
}


function total(){
    equals.addEventListener('click', () => {
        if(current.value === ''){
            current.value = '';
            previous.value = '';
        }
        let answer = eval(current.value);
        
        previous.value = answer;
        if(previous.value && current.value !== ''){
            console.log('true');
        } 
        current.value = '';
    })

}







btnsValue();
deleteCurrent();
total();
clearAll();


