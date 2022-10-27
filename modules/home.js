function createHome(){
    const hero = document.createElement('div.');
    hero.classList.add('hero');
    
    const logo = document.createElement('div');
    logo.classList.add('hero-logo');
    logo.innerHTML = `Seany's Restrauntey`;

    hero.appendChild(logo);
    
    const text = document.createElement('div');
    text.classList.add('hero-text');
    text.innerHTML = `Glasgow`;

    logo.appendChild(text);

    return hero;
}
export default createHome;