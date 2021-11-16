var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
Patty: 80,
Cheese: 10,
Tomatoes: 20,
Onions: 20,
Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
Patty: true,
Cheese: true,
Tomatoes: true,
Onions: true,
Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
renderPatty();
renderCheese();
renderTomatoes();
renderOnions();
renderLettuce();
renderButtons();
renderIngredientsBoard();
renderPrice();
}

function renderPatty() {
let patty = document.querySelector('#patty');
//you can also use getElementById
if (state.Patty) {
patty.style.display = 'inherit';
} else {
patty.style.display = 'none';
}
}

function renderCheese() {
//Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
let cheese = document.querySelector('#cheese');
if (state.Cheese) {
cheese.style.display = 'inherit';
} else {
cheese.style.display = 'none';
}
}

function renderTomatoes() {
//Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM

let tomato = document.querySelector('#tomato');
if (state.Tomatoes) {
tomato.style.display = 'inherit';
} else {
tomato.style.display = 'none';
}
}

function renderOnions() {
//Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
let onion = document.querySelector('#onion');
if (state.Onions) {
onion.style.display = 'inherit';
} else {
onion.style.display = 'none';
}
}

function renderLettuce() {
//Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
let lettuce = document.querySelector('#lettuce');
if (state.Lettuce) {
lettuce.style.display = 'inherit';
} else {
lettuce.style.display = 'none';
}
}

document.querySelector('.btn-patty').onclick = function () {
state.Patty = !state.Patty;
renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector('.btn-cheese').onclick = function () {
state.Cheese = !state.Cheese;
renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector('.btn-tomatoes').onclick = function () {
state.Tomatoes = !state.Tomatoes;
renderAll();
};

//

document.querySelector('.btn-onions').onclick = function () {
state.Onions = !state.Onions;
renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector('.btn-lettuce ').onclick = function () {
state.Lettuce = !state.Lettuce;
renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
let checkPatty = document.querySelector('.btn-patty');
let checkCheese = document.querySelector('.btn-cheese');
let checkTomato = document.querySelector('.btn-tomatoes');
let checkOnion = document.querySelector('.btn-onions');
let checkLettuce = document.querySelector('.btn-lettuce');
//you can also use getElementById
if (state.Patty) {
checkPatty.classList.add('active');
} else {
checkPatty.classList.remove('active');
}
if (state.Cheese) {
checkCheese.classList.add('active');
} else {
checkCheese.classList.remove('active');
}
if (state.Tomatoes) {
checkTomato.classList.add('active');
} else {
checkTomato.classList.remove('active');
}
if (state.Onions) {
checkOnion.classList.add('active');
} else {
checkOnion.classList.remove('active');
}
if (state.Lettuce) {
checkLettuce.classList.add('active');
} else {
checkLettuce.classList.remove('active');
}
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
let textPattey = document.querySelector('.items1');
let textCheese = document.querySelector('.items2');
let texttomato = document.querySelector('.items3');
let textOnion = document.querySelector('.items4');
let textLettuce = document.querySelector('.items5');
//you can also use getElementById
if (state.Patty) {
textPattey.innerHTML = 'Pattey';
} else {
textPattey.innerHTML = ' ';
}
if (state.Cheese) {
textCheese.innerHTML = 'Cheese';
} else {
textCheese.innerHTML = ' ';
}
if (state.Tomatoes) {ssss
texttomato.innerHTML = 'Tomatoes';
} else {
texttomato.innerHTML = ' ';
}
if (state.Onions) {
textOnion.innerHTML = 'Onions';
} else {
textOnion.innerHTML = ' ';
}
if (state.Lettuce) {
textLettuce.innerHTML = 'Lettuce';
} else {
textLettuce.innerHTML = ' ';
}
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
const submit = document.querySelector('.Rectangle5');
var sum = 20;
if (state.Patty) sum = sum + parseInt(ingredients.Patty);
if (state.Cheese) sum = sum + parseInt(ingredients.Cheese);
if (state.Tomatoes) sum = sum + parseInt(ingredients.Tomatoes);
if (state.Onions) sum = sum + parseInt(ingredients.Onions);
if (state.Lettuce) sum = sum + parseInt(ingredients.Lettuce);
submit.onclick = evt => {
document.querySelector('.price-details').innerHTML = 'INR' + sum;
};
}

