
function get_random_image(x){
        return "https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?semt=ais_hybrid&w=740&q=80"
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wii_button").addEventListener("click", function() {
        let image = get_random_image();
        console.log(image);
    });
    let channels = []
    for (let i = 0; i < 12; i++) {
        channels.push(document.querySelector(".channel:nth-child(" + (i + 1) + ")"));
    }
    for (let i = 0; i < 12; i++) {
        channels[i].style.backgroundImage = "url('" + get_random_image(i) + "')";
    }
});