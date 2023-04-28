const progress = document.querySelector(".progress-done");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");

let finalValue = 0;
let max = 0;

function changeWidth() {
    if(finalValue<=max){
    progress.style.width = `${(finalValue / max) * 100}%` ;
    progress.innerText = `${Math.ceil((finalValue / max) * 100)}%` ;
    }
    else{
        alert("Error");
    }
}

input.addEventListener("keyup", function () {
    finalValue = parseInt(input.value, 10);
    //console.log("finalValue",finalValue);
    changeWidth();
})

maxInput.addEventListener("keyup", function () {
    max = parseInt(maxInput.value, 10);
    //console.log("max",max);
    changeWidth();
})
