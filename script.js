const desligada = document.getElementById('Lamp');
const ligada = document.getElementById('on');
const quebrada = document.getElementById('broken');

const btnOn = document.getElementById('TurnOn');
const btnOff = document.getElementById('TurnOff');
const btnRepair = document.getElementById('repairBtn');



let isBroken = false;

btnOn.addEventListener('click', () => {
    var somOnAnOff = document.getElementById("OnAnOff");
            somOnAnOff.play();
    if (isBroken) return; 
    desligada.style.display = 'none';
    quebrada.style.display = 'none';
    ligada.style.display = 'inline';
});

btnOff.addEventListener('click', () => {
    var somOffOn = document.getElementById("OffAnOn");
            somOffOn.play();
    if (isBroken) return; 
    ligada.style.display = 'none';
    quebrada.style.display = 'none';
    desligada.style.display = 'inline';
});

Lamp.addEventListener('click', () => {
    var som = document.getElementById('BrokenLamp');
    som.play();
    desligada.style.display = 'none';
    ligada.style.display = 'none';
    quebrada.style.display = 'inline';
    isBroken = true; 
});

on.addEventListener('click', () => {
    var som = document.getElementById('BrokenLamp');
    som.play();
    desligada.style.display = 'none';
    ligada.style.display = 'none';
    quebrada.style.display = 'inline';
    isBroken = true;
});



function quebrarLampada() {
    desligada.style.display = 'none';
    ligada.style.display = 'none';
    quebrada.style.display = 'inline';
    btnRepair.style.display ='inline';
}

btnRepair.addEventListener('click', () => {
    alert(`Para consertar a lâmpada, recarregue a página.`);
});

Lamp.addEventListener('click', quebrarLampada);
on.addEventListener('click', quebrarLampada);





