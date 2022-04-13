// Pick colors
let colors = ['red', 'purple', 'green', 'black', 'yellow', 'orange', 'blue' , 'gold', 'silver', 'aquamarine'];


//change the background of canvas when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
   //select a random number between 0 - 9
   let index = parseInt((Math.random()*colors.length)+1);
   //grab the canvas
   let canvas = document.getElementById('canvas');

   canvas.style.background = `${colors[index]}`
})