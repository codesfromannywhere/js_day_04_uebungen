console.log("läuft");

const slider = document.querySelector('form input[type="range"]');
const output = document.querySelector('p');
const points = document.querySelector('h3')


function checkAirQuality() {
    // console.log(slider.value);
    if (slider.value <= 50) {
        output.innerHTML = ("Level of health concern: Good" + " " + 
        "Level of health effect: Little or no risk")
        points.innerHTML = slider.value
        document.body.style.backgroundColor = "green"

    } else if (slider.value >50 && slider.value <=100) {
        output.innerHTML = ("Level of health concern: Moderate" + " " + 
        "Level of health effect: Acceptable quality")
        points.innerHTML = slider.value
        document.body.style.backgroundColor = "yellow"
    } else if (slider.value >101 && slider.value <=150) {
        output.innerHTML=("Level of health concern: Unhealthy for sensitive groups" + " " + 
        "Level of health effect: Generable publics not likely affected")
        points.innerHTML = slider.value
        document.body.style.backgroundColor = "orange"
    }
}
