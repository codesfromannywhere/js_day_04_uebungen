console.log("läuft");

const input = document.querySelector('form input[type="number"]');
const result = document.querySelector('div p:nth-of-type(2)');
// console.log(input);
// console.log(result);

function weather() {
    if (input.value < 8) {
        result.innerHTML = "super";
    } else if (input.value < 6) {
        result.innerHTML = "gut";
    } else if (input.value < 3) {
        result.innerHTML = "okay";
    } else if (input.value < 6) {
        result.innerHTML = "schlecht";
    }
} 