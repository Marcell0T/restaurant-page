import loadHome from './home/home';
import loadContact from './contact/contact';

const content = document.getElementById('content');

// displayContact();
function clearDisplay() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function displayHeader(active) {
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    logo.innerHTML = 'Pizzeria';
    homeBtn.innerHTML = 'Home';
    menuBtn.innerHTML = 'Menu';
    contactBtn.innerHTML = 'Contact';

    if(active === 'home') {
        homeBtn.classList.add('active');
    } else if(active === 'menu') {
        menuBtn.classList.add('active');
    } else if(active === 'contact') {
        contactBtn.classList.add('active');
    }

    homeBtn.setAttribute('id', 'home-btn');
    menuBtn.setAttribute('id', 'menu-btn');
    contactBtn.setAttribute('id', 'contact-btn');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(logo);
    header.appendChild(nav);

    content.appendChild(header);

    homeBtn.addEventListener('click', () =>{
        clearDisplay();
        displayHome();
    })
    
    contactBtn.addEventListener('click', () =>{
        clearDisplay();
        displayContact();
    })
}

function displayFooter() {
    const footer = document.createElement('footer');
    const footerLogo = document.createElement('h2');
    
    footerLogo.innerHTML = 'Pizzeria';

    footer.appendChild(footerLogo);
    content.appendChild(footer);
}

function displayHome() {
    displayHeader('home');
    loadHome();
    displayFooter();
}

function displayContact() {
    displayHeader('contact');
    loadContact();
    displayFooter();
}


displayHome();