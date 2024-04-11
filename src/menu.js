import dish from './dish.jpg';

export default function menuLoad(){ 
    /* variables and constants */
    const menuTitle = document.createElement('h1');
    const itemTitle = document.createElement('h3');
    const itemPrice = document.createElement('h3');
    const titleContainer = document.createElement('div')
    const menuContainer = document.createElement('div');

/*     const header = document.getElementById('header'); */
    const content = document.getElementById('content');
    const ul = document.createElement('ul');
    const ul2 = document.createElement('ul');
    let textNode;
    let textNode2;

    /* create image element */
    const newImg = new Image();
    newImg.src = dish;
    newImg.setAttribute('id', 'img-container')
    
/* Menu object with items and price */
    const menuObj = {
        "Cerebrum Consommé": "$45.99",
        "Sciticas' Bouillabaisse": "$143.56",
        "Smaug's Spiced Cassoulet": "$75.76",
        "Ethereal Essence Broth": "$44.51",
        "Alicorn Elixir Linguine": "$99.83",

    }
/* set attributes for elements */
    menuTitle.setAttribute('id', 'menu-title');
    itemPrice.setAttribute('id', 'item-price');
    itemTitle.setAttribute('id', 'item-title');
    titleContainer.setAttribute('id', 'title-container');
    menuContainer.setAttribute('id', 'menu-container');

    /* assign text to elements */
   
    menuTitle.innerHTML = 'Menu'
    itemPrice.innerHTML = 'Price';
    itemTitle.innerHTML = "Item"

    /* appending to the page */
    titleContainer.appendChild(itemTitle);
    titleContainer.appendChild(itemPrice);
    content.appendChild(menuTitle);
    content.appendChild(titleContainer);
    
/* loop over the menu object and add item and price */
    Object.keys(menuObj).forEach(key => {
        const price = menuObj[key];
        let li = document.createElement('li');
        li.setAttribute('class', 'menu-list-items');
        textNode = document.createTextNode(key);
        li.appendChild(textNode);
        ul.appendChild(li);

        let priceLi = document.createElement('li');
            priceLi.setAttribute('class', 'menu-list-price');
            textNode2 = document.createTextNode(price);
            priceLi.appendChild(textNode2);
            ul2.appendChild(priceLi);

        console.log(`Key: ${key}, value: ${price}`)
    });

    menuContainer.appendChild(ul);
    menuContainer.appendChild(ul2)
    content.appendChild(menuContainer);
    content.appendChild(newImg);
}