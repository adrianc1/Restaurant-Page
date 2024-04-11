import './style.css';
import homePageLoad from './init.js';
import menuLoad from './menu.js';
import clearPage from './clear.js';
import navLoad from './nav.js';
import aboutPage from './about.js';

navLoad();
homePageLoad();

    const btns = document.querySelectorAll('.btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.innerHTML === "Home") {
                clearPage();
                homePageLoad();
            } else if (btn.innerHTML === "Menu"){
                clearPage();
                menuLoad();
            } else if (btn.innerHTML === "About") {
                clearPage();
                aboutPage();
            }
        })

    })
