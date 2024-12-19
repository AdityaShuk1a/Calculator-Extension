const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

function calculate(value) {
    let total = 0;
    let currentNumber = '';
    let lastOperator = '+';
    
    for (let i = 0; i < value.length; i++) {
        let char = value[i];

        if (!isNaN(char)) {
            currentNumber += char;
        }
        
        if (isNaN(char) || i === value.length - 1) {
            if (char === '.') {
                currentNumber += char;
                continue;
            }

            switch (lastOperator) {
                case '+':
                    total += parseFloat(currentNumber);
                    break;
                case '-':
                    total -= parseFloat(currentNumber);
                    break;
                case '*':
                    total *= parseFloat(currentNumber);
                    break;
                case '/':
                    total /= parseFloat(currentNumber);
                    break;
            }

            lastOperator = char;
            currentNumber = '';
        }
    }
    
    return total;
}

buttons.forEach((button) => {
    if (button.dataset.value) {
        button.addEventListener("click", () => {
            screen.value += button.dataset.value;
        });
    } else if (button.dataset.action === "clear") {
        button.addEventListener("click", () => {
            screen.value = "";
        });
    }
});

document.getElementById("equalTo").addEventListener("click", () => {
    try {
        screen.value = calculate(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
});