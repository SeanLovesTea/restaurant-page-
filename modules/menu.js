function createMenu(){

    const hero = document.createElement('div.');
    hero.classList.add('hero');

    const container = document.createElement('div');
    container.classList.add('container');
    hero.appendChild(container);

    const lineTop = document.createElement('div');
    lineTop.classList.add('darkline');
    container.appendChild(lineTop);

    const lineBot = document.createElement('div');
    lineBot.classList.add('darkline-Bot');
    container.appendChild(lineBot);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    container.appendChild(menu);

    const h1 = document.createElement('h1');
    h1.innerHTML ="Menu";
    menu.appendChild(h1);

    const foodCards = [
        ["Chicken Taco1", "£8.50", `url("/src/img/tacos.jpg")`],
        ["Chicken Taco2", "£8.50", `url("/src/img/tacos.jpg")`],
        ["Chicken Taco3", "£8.50", `url("/src/img/tacos.jpg")`],
        ["Tasty Calendar", "£21.99", `url("/src/img/calendar.svg")`],
        ["Chicken Taco5", "£8.50", `url("/src/img/tacos.jpg")`],
        ["Chicken Taco6", "£8.50", `url("/src/img/tacos.jpg")`],
        ["Chicken Taco7", "£8.50", `url("/src/img/tacos.jpg")`],
        ["Chicken Taco8", "£8.50", `url("/src/img/tacos.jpg")`],
    ];

    function renderMenuCards(foodCards){
        let l = foodCards.length - 1;

        for(let i = 0; l >= i; i++){
            const menuCards = document.createElement('div');
        menuCards.classList.add('menu-cards');
        menuCards.setAttribute('id', `menuCard${i}`);
        menu.appendChild(menuCards);
    
        const image = document.createElement('div');
        image.classList.add('image');
        image.setAttribute('id', `image${i}`);
        image.style.backgroundImage = foodCards[i][2];
        menuCards.appendChild(image);
    
        const title = document.createElement('div');
        title.classList.add('title');
        title.setAttribute('id', `title${i}`);
        title.innerHTML = foodCards[i][0];
        menuCards.appendChild(title);
    
        const price = document.createElement('div');
        price.classList.add('price');
        price.setAttribute('id', `price${i}`);
        price.innerHTML = foodCards[i][1];
        menuCards.appendChild(price); 
        } 
    }
    renderMenuCards(foodCards);

    const btns = document.createElement('div');
    btns.classList.add('btns');
    container.appendChild(btns);

    const menu_BTN = document.createElement('button');
    menu_BTN.innerHTML = 'Menu';
    btns.appendChild(menu_BTN);

    const wine_BTN = document.createElement('button');
    wine_BTN.innerHTML = 'Wine List';
    btns.appendChild(wine_BTN);
    
    return hero;

}
export default createMenu;

  