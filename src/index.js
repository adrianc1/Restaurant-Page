import './style.css';
import homePageLoad from './init.js';
import menuLoad from './menu.js';
import clearPage from './clear.js';
import navLoad from './nav.js';

navLoad();
homePageLoad();

    const btns = document.querySelectorAll('.btn');

    btns.forEach((btn) => {
        if (btn.innerHTML === "Home") {
            console.log('yes')
        } else {
            console.log('nah')
        }
    })
