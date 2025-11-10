function switchLamp(lampId) {
    const lamp = document.getElementById(lampId);

    const currentImg = lamp.querySelector('img').src;

    if (currentImg.includes('white_lamp.png')) {

        lamp.innerHTML = `
                    <img src="./img/yellow_lamp.png" alt="onLamp" class="img-fluid">
                    <button class="btn btn-secondary mt-2" onclick="switchLamp('${lampId}')">
                        Turn Off
                    </button>
                `;
    } else {

        lamp.innerHTML = `
                    <img src="./img/white_lamp.png" alt="offLamp" class="img-fluid">
                    <button class="btn btn-warning mt-2" onclick="switchLamp('${lampId}')">
                        Turn On
                    </button>
                `;
    }
}
function switchLamp_alt(lampId, turnOn) {
    const container = document.getElementById(lampId);
    const divs = container.children;

    if (turnOn) {

        divs[0].classList.add('d-none');
        divs[1].classList.remove('d-none');
    } else {

        divs[0].classList.remove('d-none');
        divs[1].classList.add('d-none');
    }
}

