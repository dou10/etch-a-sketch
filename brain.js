const inputHeight = document.querySelector('#inputheight');
const inputWidth = document.querySelector('#inputwidth');
const reset = document.querySelector('#reset');


//makes grid dynamically
const container = document.getElementById("container");
function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows* cols); c++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', changeToBlack);
    };

    console.log('grid made');
};
makeGrid(30,30);

function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    makeGrid(inputHeight.value,inputWidth.value);
    console.log('Grid done resetting')
;}

reset.addEventListener('click', resetGrid);

//gets the cell you mouseover and changes it to black
function changeToBlack(){
    var opacity = Number(this.style.opacity);
    if(this.style.backgroundColor !== 'black'){
        this.style.opacity = 0.1;
        this.style.backgroundColor = 'black';
    }

    if(opacity < 1){
        this.style.opacity = opacity + 0.2;
    }
    this.style.backgroundColor = 'black';
}
