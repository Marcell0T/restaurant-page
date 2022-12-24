import pepperoniPng from './img/pepperoni.png';
import capricciosaPng from './img/capricciosa.png';
import cheesePng from './img/Cheese.png';
import veggiePng from './img/Veggie.png';

export default function loadMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    const h2 = document.createElement('h2');
    const cardContainer = document.createElement('div');
    
    const cardPepperoni = document.createElement('div');
    const pepperoni = new Image();
    const h3Pepperoni = document.createElement('h3');

    const cardCapricciosa = document.createElement('div');
    const capricciosa = new Image();
    const h3Capricciosa = document.createElement('h3');

    const cardCheese = document.createElement('div');
    const cheese = new Image();
    const h3Cheese = document.createElement('h3');

    const cardVeggie = document.createElement('div');
    const veggie = new Image();
    const h3Veggie = document.createElement('h3');

    pepperoni.src = pepperoniPng;
    capricciosa.src = capricciosaPng;
    cheese.src = cheesePng;
    veggie.src = veggiePng;

    h2.innerHTML = 'Menu';

    h3Pepperoni.innerHTML = 'Pepperoni';
    h3Capricciosa.innerHTML = 'Capricciosa';
    h3Cheese.innerHTML = 'Cheese';
    h3Veggie.innerHTML = 'Veggie';

    menu.setAttribute('id', 'menu');
    cardContainer.setAttribute('id', 'card-container');
    
    cardPepperoni.classList.add('card');
    cardCapricciosa.classList.add('card');
    cardCheese.classList.add('card');
    cardVeggie.classList.add('card');

    cardPepperoni.appendChild(pepperoni);
    cardPepperoni.appendChild(h3Pepperoni);

    cardCapricciosa.appendChild(capricciosa);
    cardCapricciosa.appendChild(h3Capricciosa);

    cardCheese.appendChild(cheese);
    cardCheese.appendChild(h3Cheese);

    cardVeggie.appendChild(veggie);
    cardVeggie.appendChild(h3Veggie);

    cardContainer.appendChild(cardPepperoni);
    cardContainer.appendChild(cardCapricciosa);
    cardContainer.appendChild(cardCheese);
    cardContainer.appendChild(cardVeggie);

    menu.appendChild(h2);
    menu.appendChild(cardContainer);
    
    content.appendChild(menu);
}