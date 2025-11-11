function switchLamp(lampId) {
    const lamp = document.getElementById(lampId);
    //quer
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
    if(turnOn){

    }
}
function switchLamp_alt2(lampId) {
    const container = document.getElementById(lampId);
    const divOff = container.children[0];
    const divOn  = container.children[1];
    
    // Scambia la visibilità
    divOff.classList.toggle('d-none');
    divOn.classList.toggle('d-none');

}
function switchLamp_alt3(lampId) {
    const lamp = document.getElementById(lampId);
    const img = lamp.querySelector('img');      
    const button = document.getElementById('on/off'); 
    // const button = lamp.querySelector('input[type="button"]');

    if (img.src.includes('white_lamp.png')) {
        img.src = "img/yellow_lamp.png";
        img.alt = "onLamp";
        button.value = "Turn Off";
    } else {
        img.src = "img/white_lamp.png";
        img.alt = "offLamp";
        button.value = "Turn On";
    }
}

