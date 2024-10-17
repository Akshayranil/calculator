let screen = document.getElementById("screen");

function heyclick(val) {
    screen.value += val;
}

function equalclick() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

function myclear() {
    screen.value = "";
}

function mysquare() {
    try {
        screen.value = Math.pow(screen.value, 2);
    } catch (error) {
        screen.value = "Error";
    }
}

function mymodulo() {
    try {
        screen.value = eval(screen.value + '/100');
    } catch (error) {
        screen.value = "Error";
    }
}
