function switchFunction1() {
    document.getElementById("lamp1").innerHTML = `
        <img src="./img/yellow_lamp.png" alt="onLamp" class="img-fluid">
        <button class="btn btn-secondary mt-2" onclick="switchFunction2()">Turn Off</button>
      `;
    document.getElemenntById("lamp1").id= "lamp2";
}

function switchFunction2() {
    document.getElementById("lamp2").innerHTML = `
        <img src="./img/white_lamp.png" alt="offLamp" class="img-fluid">
        <button class="btn btn-warning mt-2" onclick="switchFunction1()">Turn On</button>
      `;
      document.getElemenntById("lamp2").id= "lamp1";
}