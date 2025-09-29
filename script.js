/* VARIABLES*/
const website_url = "http://127.0.0.1:8000"



async function get_random_data(x){
    const res = await fetch(`${website_url}/channels/get_channel/?arg=${encodeURIComponent(x)}`);
    const data = await res.json();
    return data;
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wii_button").addEventListener("click", async function() {
        let image = get_random_image(1);
        console.log(image);
        let data = await get_random_data(1);
        console.log(data);
    });
    const grid = document.getElementById("main_grid");
    const NUM_CHANNELS = 12;
    const channels = [];
    for (let i = 0; i < NUM_CHANNELS; i++) {
        const div = document.createElement("div");
        div.className = "channel";
        grid.appendChild(div);
        channels.push(div);
    }
    for (let i = 0; i < NUM_CHANNELS; i++) {
        get_random_data(i)
            .then(data => {
                channels[i].style.backgroundImage = data.image;
                channels[i].redirection = data.redirection;
                channels[i].addEventListener('click', function() {
                    window.location.href = this.redirection;
                });
                channels[i].style.color = data.color;
                const p = document.createElement("p");
                p.textContent = data.text;
                channels[i].appendChild(p);
            })
            .catch(err => { console.error('Failed to load image or text for channel', i, err); });
    }
});