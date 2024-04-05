import './style.css';

function component() {
    const nav = document.getElementById('nav');
    let navArray = ["Home", "Menu", "About", "Contact Us"];
    let node;
    let textNode;

/* Nav Bar list Items and Append to Document*/
    const navList = document.createElement('ul');
    const contentBody = document.getElementById('content');

    for(let i =0; i < navArray.length; i++) {
        const node = document.createElement('li');
        textNode = document.createTextNode(navArray[i]);
        node.appendChild(textNode)
        navList.appendChild(node);
    }
    nav.appendChild(navList);

    /* appending title to content container */
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'title');
    h1.innerHTML = "Adriano's Cocktails & Bites";
    content.appendChild(h1);

    const mainContent = document.createElement('div');
    const specContainer = document.createElement('div');
    
    mainContent.setAttribute('class', 'main-content');
} 

component();



console.log('hey does this work?!')