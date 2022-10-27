function createHeader(){
    const header = document.createElement('div.');
    header.classList.add('header');
    
    const logo = document.createElement('div');
    logo.classList.add('nav-logo');
    logo.innerHTML = `Seany's Restrauntey`;
    header.appendChild(logo);

    const nav = document.createElement('div');
    nav.classList.add('nav');
    header.appendChild(nav);

    const menu = document.createElement('div');
    menu.classList.add('menu-item');
    menu.innerHTML = `Menu`;
    nav.appendChild(menu);

    const contact = document.createElement('div');
    contact.classList.add('menu-item');
    contact.innerHTML = `Contact`;
    nav.appendChild(contact);

    const book = document.createElement('div');
    book.classList.add('book-now');
    book.innerHTML = `Book Now`;
    header.appendChild(book);

    const bookIMG= document.createElement('img');
    bookIMG.src = "/src/img/calendar.svg";
    book.appendChild(bookIMG);

    return header;
}
export default createHeader;
