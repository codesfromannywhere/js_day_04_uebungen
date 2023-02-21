console.log("läuft");

const input = document.querySelector('form input[type="number"]');
const result = document.querySelector('p');

// console.log(input);
// console.log(result);

function adult() {
    if (input.value >= 18) {
        result.innerHTML = "Volljährig";
    } else {result.innerHTML = "Minderjährig";
}
}
