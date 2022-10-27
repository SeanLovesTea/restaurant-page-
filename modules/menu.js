function createMenu(){
    const container = document.createElement('div');
    container.classList.add('container');

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
        ["Chicken Taco4", "£8.50", `url("/src/img/tacos.jpg")`],
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
    container.appendChild(menu_BTN);

    const wine_BTN = document.createElement('button');
    container.appendChild(wine_BTN);
    
    return container;

}
export default createMenu;

   // const menuCards = document.createElement('div');
    // menuCards.classList.add('menu-cards');
    // menu.appendChild(menuCards);

    // const image = document.createElement('div');
    // image.classList.add('image');
    // menuCards.appendChild(image);

    // const title = document.createElement('div');
    // title.classList.add('title');
    // menuCards.appendChild(title);

    // const price = document.createElement('div');
    // price.classList.add('price');
    // menuCards.appendChild(price);

// <!-- <div class="container">
            
//              <div class="darkline"></div>
//             <div class="darkline-Bot"></div>
//             <div class="menu">
//                 <h1>Menu</h1>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
                    
//                 </div>
//                 <div class="menu-cards">
//                     <div class="image"></div>
//                     <div class="title">Taco Chicken</div>
//                     <div class="price">£8.50</div>
//                 </div>
//             </div>
//             <div class="btns">
//                 <button>Menu</button>
//                 <button>Wine List</button>
//             </div>
            
//         </div> -->