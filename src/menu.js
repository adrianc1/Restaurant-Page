export default function menuLoad() {
    const menuTitle = document.createElement('h1');
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    let menuArray = ["Extraterrestrial Cerebrum Consommé", "Sorcerers' Bouillabaisse", "Smaug's Spiced Cassoulet", "Ethereal Essence Broth", "Alicorn Elixir Linguine", "Revenant Roulades", "Monarch's Medley Purée", "Enchanted Fairy Fricassée", "Gastronome's Gentry Gumbo", "Yeti's Yuzu Sashimi"]

    menuTitle.setAttribute('id', 'menu-title');
    header.setAttribute('id', 'name')
    header.innerHTML = "Adriano's Cocktails & Bites"
    menuTitle.innerHTML = 'Menu'

    for (let i = 0; i < menuArray.length; i++){ 
        
    }

    content.appendChild(menuTitle);

}

