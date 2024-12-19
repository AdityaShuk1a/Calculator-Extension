function appendValue(value){
    const display = document.getElementById("screen");
    display.value+=value;
}


function clearDisplay(){
    const display = document.getElementById("screen");
    display.value = "";
}

function calculate(){
    const display = document.getElementById("screen");
    display.value = eval(display.value);
}