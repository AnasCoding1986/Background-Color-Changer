
let text = document.getElementsByClassName('txt');
function backgroundColorChanger(color) {
    document.body.style.backgroundColor = color;
    
    if (color == 'black') {
        for (let elm of text) {
            elm.style.color = "white";
        }
    }else{
        for (let elm of text) {
            elm.style.color = "black";
        }
    }
}