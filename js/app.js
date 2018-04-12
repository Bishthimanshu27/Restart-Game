/*
 * Create a list that holds all of your cards
 */

const deck = document.querySelector('.deck') 
const restart = document.querySelector('.restart')
const moves = document.querySelector('.score-panel .moves')
const cards = document.querySelectorAll('.card')
let openCards = [];  
//All Cards as an array


deck.addEventListener('click', function(e){
    if(!e.target.classList.contains('open') && openCards.length < 2 && e.target.classList.contains('card')){
        //conditions according to click
            let classList = e.target.classList.add('show','open');
            openCards.push(e.target);
        
           setTimeout(function() {
               if(openCards.length == 2) {

                moves.textContent++;

                //increment moves when two cards flipped

             if(openCards[0].innerHTML === openCards[1].innerHTML){
                 openCards[0].classList.add('match');
                 openCards[1].classList.add('match');
                 //added class named match
                 openCards = [];
                 //empty array
               win()
             } 
             
             else {
                     openCards[0].classList.remove('open','show');
                     openCards[1].classList.remove('open','show'); 
                     //removed class named open and show
                     openCards = [];   
                  }
                }
             },500);

           
    }

})

restart.addEventListener('click', function(){
    for(x = 0; x < cards.length; x++){
       cards[x].classList.remove('open','match','show')
       //removed class named open,show and match
    }
    moves.innerHTML = "";

    shuffle()
})
//reset game 


function win() {
    if(cards.length == document.querySelectorAll('.match').length)
    alert('CONGRATULATIONS! You won')
}
//function which shows that you win 


function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// Array to keep track of open cards
openCards = [];



