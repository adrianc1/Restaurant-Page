export default function pageLoad() {
    const nav = document.getElementById('nav');
    let navArray = ["Home", "Menu", "About", "Contact Us"];
    let node;
    let textNode;

/* Nav Bar list Items and Append to Document*/
    const navList = document.createElement('ul');
    navList.setAttribute('id', 'nav-list')
    let content = document.getElementById('content');

    for(let i =0; i < navArray.length; i++) {
        const node = document.createElement('li');
        node.setAttribute('class', 'nav-list-items')
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


/* Today's Special list! */
    const mainContent = document.createElement('div');
    const specContainer = document.createElement('div');
    const specialTitle = document.createElement('h2');
    const specList = document.createElement('ul');
    const specItem = document.createElement('li');

    let specialArray = ["Mexican Margarita", "Yellow Tail Gumwao", "Peanut Butter Pizza", "Spicy Pork Belly Tacos", "Duck Au Jus w. Burnt Cabbage Ends"]
    
    mainContent.setAttribute('class', 'main-content');
    specContainer.setAttribute('class', 'spec-container');
    specialTitle.setAttribute('id', 'specials-title');
    specList.setAttribute('id', 'spec-list');

    specialTitle.innerHTML = "Today's Specials: ";

    for(let i =0; i < specialArray.length; i++) {
        const specItem = document.createElement('li');
        specItem.setAttribute('class', 'tdy-spec-list')
        let textNode = document.createTextNode(specialArray[i]);
        specItem.appendChild(textNode)
        specList.appendChild(specItem);
    }
    specContainer.appendChild(specialTitle);
    specContainer.appendChild(specList);

    mainContent.appendChild(specContainer);

    content.appendChild(mainContent)


    /* Company Story and Information */
    const messageContainer = document.createElement('div');
    const para = document.createElement('p');
    messageContainer.setAttribute('class', 'message-container');
    para.innerHTML = "<em>Welcome to Adriano's Cocktails!</em> We use the highest quality ingredients in both our food and drinks. Our produce is grown locally in the Salinas moutnain range. Our meat is grass-fed and 100% Black Angus"

    messageContainer.appendChild(para);

    mainContent.appendChild(messageContainer)
}
