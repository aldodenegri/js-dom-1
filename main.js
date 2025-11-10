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