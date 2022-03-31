//Buttons variables

let btnOne = document.querySelector('#btn-color-one');
let btnTwo = document.querySelector('#btn-color-two');
let btnThree = document.querySelector('#btn-color-three');
let btnFour = document.querySelector('#btn-color-four');
let btnMore = document.querySelector('.btn-more');

//Colors variables

let colorOne = document.querySelector('#color-one');

let colorTwo = document.querySelector('#color-two');

let colorThree = document.querySelector('#color-three');

let colorFour = document.querySelector('#color-four');

//Color Text

let colorText = document.querySelector('.color-text');

//Name color

let nameColorOne = document.querySelector('#name-color-one');
let nameColorTwo = document.querySelector('#name-color-two');
let nameColorThree = document.querySelector('#name-color-three');
let nameColorFour = document.querySelector('#name-color-four');

//Icon Dice

let diceOne = document.querySelector('.bi-dice-1-fill');
let diceTwo = document.querySelector('.bi-dice-2-fill');
let diceThree = document.querySelector('.bi-dice-3-fill');
let diceFour = document.querySelector('.bi-dice-4-fill');

//Function Random
const randColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

const intervalColor = setInterval(changeColorText, 1000);

function changeColorText() {
    colorText.style.color = randColor();
}

btnMore.addEventListener('click', () => {

    btnMore.innerHTML === 'Show Less' ? btnMore.innerHTML = 'Show More' : btnMore.innerHTML = 'Show Less';


    // if ( btnMore.innerHTML === "Show Less") {
    //     btnMore.innerHTML = "Show More";
    // } else {
    
    //     btnMore.innerHTML = "Show Less";
    // }
});



btnOne.addEventListener('click', () => {

    let colorOneCard = window.getComputedStyle(colorOne).backgroundColor;

    diceOne.classList.add('d-none');

    colorOne.style.backgroundColor = randColor();

    nameColorOne.innerHTML = colorOneCard;

});


btnTwo.addEventListener('click', () => {
    let colorTwoCard = window.getComputedStyle(colorTwo).backgroundColor;

    diceTwo.classList.add('d-none');

    colorTwo.style.backgroundColor = randColor();

    nameColorTwo.innerHTML = colorTwoCard;

});

btnThree.addEventListener('click', () => {
    let colorThreeCard = window.getComputedStyle(colorThree).backgroundColor;

    diceThree.classList.add('d-none');

    colorThree.style.backgroundColor = randColor();

    nameColorThree.innerHTML = colorThreeCard;

});

btnFour.addEventListener('click', () => {
    let colorFourCard = window.getComputedStyle(colorFour).backgroundColor;

    diceFour.classList.add('d-none');

    colorFour.style.backgroundColor = randColor();

    nameColorFour.innerHTML = colorFourCard;
});

window.onkeypress = (e) => {

    if (e.keyCode == 061) {
        let colorOneCard = window.getComputedStyle(colorOne).backgroundColor;

        diceOne.classList.add('d-none');

        colorOne.style.backgroundColor = randColor();

        nameColorOne.innerHTML = colorOneCard;
    }

    if (e.keyCode == 062) {
        let colorTwoCard = window.getComputedStyle(colorTwo).backgroundColor;

        diceTwo.classList.add('d-none');

        colorTwo.style.backgroundColor = randColor();

        nameColorTwo.innerHTML = colorTwoCard;
    }

    if (e.keyCode == 063) {
        let colorThreeCard = window.getComputedStyle(colorThree).backgroundColor;

        diceThree.classList.add('d-none');

        colorThree.style.backgroundColor = randColor();

        nameColorThree.innerHTML = colorThreeCard;
    }

    if (e.keyCode == 064) {
        let colorFourCard = window.getComputedStyle(colorFour).backgroundColor;

        diceFour.classList.add('d-none');

        colorFour.style.backgroundColor = randColor();

        nameColorFour.innerHTML = colorFourCard;
    }


}