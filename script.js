


const inputValue = document.querySelector(".inputvalue");



console.log("the value of input is",inputValue.value);
// const logger = ()=>{
//     console.log("the value of input is",inputValue.value);

// }

let value = "";
let number = 0;
inputValue.value = value;
const buttonValue=document.querySelectorAll('.btn');

function buttonclick(value1){
    console.log(value1);
    value +=value1;
    console.log(value);
    inputValue.value= value;
}

function back(){
    inputValue.value = inputValue.value.slice(0, -1);
    value = inputValue.value;
}

function clear1(){
    inputValue.value='';
    console.log("working");
    value='';
}

function oprtr(arg){
    let prevValue = inputValue.value;
}