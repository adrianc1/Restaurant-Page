import dish from './dish.jpg';

export default function menuLoad(){ 
    const menuTitle = document.createElement('h1');
    const itemTitle = document.createElement('h3');
    const itemPrice = document.createElement('h3');
    const titleContainer = document.createElement('div')

    const header = document.getElementById('header');
    const content = document.getElementById('content');
    const ul = document.createElement('ul');
    const ul2 = document.createElement('ul');
    let textNode;
    let textNode2;

    const newImg = new Image();
    newImg.src = dish;
    newImg.setAttribute('id', 'img-container')
    

    const menuObj = {
        "Cerebrum Consommé": "$45.99",
        "Sciticas' Bouillabaisse": "$143.56",
        "Smaug's Spiced Cassoulet": "$75.76",
        "Ethereal Essence Broth": "$44.51",
        "Alicorn Elixir Linguine": "$99.83",

    }

    menuTitle.setAttribute('id', 'menu-title');
    header.setAttribute('id', 'name')
    itemPrice.setAttribute('id', 'item-price');
    itemTitle.setAttribute('id', 'item-title');
    titleContainer.setAttribute('id', 'title-container')

    header.innerHTML = "Adriano's Cocktails & Bites"
    menuTitle.innerHTML = 'Menu'
    itemPrice.innerHTML = 'Price';
    itemTitle.innerHTML = "Item"

    titleContainer.appendChild(itemTitle);
    titleContainer.appendChild(itemPrice);
    content.appendChild(menuTitle);
    content.appendChild(titleContainer);
    

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

    itemTitle.appendChild(ul); 
    itemPrice.appendChild(ul2);
    content.appendChild(newImg);
}