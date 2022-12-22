import giacomo from '../../src/home/imgs/Giacomo-400px.jpg';

export default function displayHome() {
    const content = document.getElementById('content');
    // Header
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

    homeBtn.classList.add('active');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(logo);
    header.appendChild(nav);

    content.appendChild(header);

    // Menu
    const container = document.createElement('div');
    const textContainer = document.createElement('div');
    
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');
    const para5 = document.createElement('p');

    const picture = new Image();
    picture.src = giacomo;

    para1.innerHTML = 'Welcome to our pizzeria!';
    para2.innerHTML = 'We are a family-owned and operated restaurant located in the heart of downtown. Our passion for pizza started at a young age, and we have been perfecting our craft for over 20 years.';
    para3.innerHTML = 'At our pizzeria, we use only the freshest ingredients to create our hand-tossed, wood-fired pizzas. From our classic margherita to our creative specialty pies, there is something for everyone on our menu. In addition to pizza, we also offer a variety of salads, sandwiches, and appetizers';
    para4.innerHTML = 'Our restaurant has a warm and inviting atmosphere, perfect for a casual dinner with friends or a special occasion.';
    para5.innerHTML = 'Thank you for choosing our pizzeria. We look forward to serving you and your loved ones delicious pizza and other dishes made with love.';

    container.setAttribute('id', 'home');
    textContainer.setAttribute('id', 'text');
    
    textContainer.appendChild(para1);
    textContainer.appendChild(para2);
    textContainer.appendChild(para3);
    textContainer.appendChild(para4);
    textContainer.appendChild(para5);

    container.appendChild(textContainer);
    container.appendChild(picture);
    content.appendChild(container);

    // Footer

    const footer = document.createElement('footer');
    const footerLogo = document.createElement('h2');
    
    footerLogo.innerHTML = 'Pizzeria';

    footer.appendChild(footerLogo);
    content.appendChild(footer);
}