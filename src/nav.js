export default function navLoad(){
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    let navArray = ["Home", "Menu", "About", "Contact Us"];
    let node;
    let textNode;

    /* Nav Bar list Items and Append to Document*/
    const navList = document.createElement('ul');
    navList.setAttribute('id', 'nav-list')

    for(let i =0; i < navArray.length; i++) {
        node = document.createElement('button');
        node.setAttribute('class', 'btn')
        textNode = document.createTextNode(navArray[i]);
        node.appendChild(textNode);
        navList.appendChild(node);
    }
    nav.appendChild(navList);
    header.appendChild(nav)
}