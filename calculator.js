// JavaScript source code
let display = document.getElementById("display");
let displayvalue = '';
buttons = document.querySelectorAll("button");
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttontext = e.target.innerText;
        if (buttontext == '*') {
            buttontext = '*';
            displayvalue += buttontext;
            display.value = displayvalue;
        }
        else if (buttontext == 'C') {
            displayvalue = '0';
            display.value = displayvalue;
        }
        else if (buttontext == '=') {
            display.value = eval(displayvalue);
        }
        else {
            displayvalue += buttontext;
            display.value = displayvalue;
        }
    })
}

