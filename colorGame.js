var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // mode button event listeners
    for (let i = 0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for(let i = 0; i < squares.length; i++){

        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            //compare color to pickedColor
            if(pickedColor == clickedColor){
                resetButton.textContent = "Play Again?"
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor="#232323";
            }
            
    });

}
reset();
}





function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent ="";
    for(let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
    reset();
})





function changeColors(color){

    //loop through all squares
    for(let i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
// make an array
arr = [];
// add num random rgb values to it
for(let i = 0; i < num; i++){
    arr.push(randomColor());
    
}
// return in readable format
return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256)
    // pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256)
    // pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256)
    "rgb(r, g, b)"
    return "rgb(" +r+ ", " +g+ ", " +b+ ")";
    
    
}