var scores,activePlayer, roundScore, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
//This code specifically generates an integer (whole number)
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('#current--0').textContent = dice;
// This will display whatever text is inside the element with the ID score--0.
var x = document.querySelector('#score--0').textContent;
console.log(x);
//Setting display to 'none' completely removes the element from the page layout so it takes up no space.
document.querySelector('.dice').style.display = 'none';