console.log("läuft");

const input = document.querySelector('form input[type="number"]');

function calc() {
    let diff = input.value - 27;
    if (diff >= 27) {
        console.log("multipliziere", diff * 2);
    }
}


// function calc(num) {
//     let diff = num - 27;
//     if (diff >= 27) {
//         console.log("multipliziere", diff * 2);
//     }
// }

// calc(35);
// calc(74);
// calc(123);


