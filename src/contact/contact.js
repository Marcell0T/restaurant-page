import phonePng from '../contact/icons/white_phone.png';
import emailPng from '../contact/icons/white_email.png';
import addressPng from '../contact/icons/white_restaurant.png'
import mapPng from '../contact/imgs/map.png'

export default function loadContact() {
    const content = document.getElementById('content');
    // Contact
    const contact = document.createElement('div');
    const contactInfo = document.createElement('div');
    const contactTxt = document.createElement('h2');
    const infoWrapper = document.createElement('div');
    
    const phone = document.createElement('div');
    const phoneIcon = new Image();
    const phoneTxt = document.createElement('span');

    const email = document.createElement('div');
    const emailIcon = new Image();
    const emailTxt = document.createElement('span');

    const address = document.createElement('div');
    const addressIcon = new Image();
    const addressTxt = document.createElement('span');

    const map = new Image();

    phoneIcon.src = phonePng;
    emailIcon.src = emailPng;
    addressIcon.src = addressPng;
    map.src = mapPng;

    contact.setAttribute('id', 'contact');
    contactInfo.setAttribute('id', 'contact-info');
    infoWrapper.setAttribute('id', 'info-wrapper');
    phone.setAttribute('id', 'phone');
    email.setAttribute('id', 'email');
    map.setAttribute('id', 'map');

    contactTxt.innerHTML = 'Contact Us';
    phoneTxt.innerHTML = '123-456-789';
    emailTxt.innerHTML = 'eat@pizzeria.com';
    addressTxt.innerHTML = '13/58 Head St, Braitling NT 0870';

    phone.appendChild(phoneIcon);
    phone.appendChild(phoneTxt);

    email.appendChild(emailIcon);
    email.appendChild(emailTxt);

    address.appendChild(addressIcon);
    address.appendChild(addressTxt);

    infoWrapper.appendChild(phone);
    infoWrapper.appendChild(email);
    infoWrapper.appendChild(address);
    
    contactInfo.appendChild(infoWrapper);
    contactInfo.appendChild(map);
    contact.appendChild(contactTxt);
    contact.appendChild(contactInfo);
    content.appendChild(contact);
}