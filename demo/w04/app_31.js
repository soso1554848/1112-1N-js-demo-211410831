const menu = [
    {
        id: 1,
        title: 'egg toast',
        category: 'breakfast',
        price: 6.99,
        img:'./images/my-1.jpg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipi sicing elit. Obcaecatipossimus excepturi. Illo voluptate amet distinctio cum, tempore iure magni nam aliquam',
    },
    {
        id: 2,
        title: 'pasta',
        category: 'lunch',
        price: 15.99,
        img:'./images/my-2.jpg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipi sicing elit. Obcaecatipossimus excepturi. Illo voluptate amet distinctio cum, tempore iure magni nam aliquam',
    },
    {
        id: 3,
        title: 'Sirloin Steak',
        category: 'dinner',
        price: 23.99,
        img:'./images/my-3.jpg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipi sicing elit. Obcaecatipossimus excepturi. Illo voluptate amet distinctio cum, tempore iure magni nam aliquam',
    },
    {
        id: 4,
        title: 'eggs',
        category: 'breakfast',
        price: 13.59,
        img:'./images/item-1.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipi sicing elit. Obcaecatipossimus excepturi. Illo voluptate amet distinctio cum, tempore iure magni nam aliquam',
    },
    {
        id: 5,
        title: 'lunch',
        category: 'lunch',
        price: 15.99,
        img:'./images/item-2.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipi sicing elit. Obcaecatipossimus excepturi. Illo voluptate amet distinctio cum, tempore iure magni nam aliquam',
    },
    {
        id: 6,
        title: 'g',
        category: 'shakes',
        price: 16.99,
        img:'./images/item-3.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipi sicing elit. Obcaecatipossimus excepturi. Illo voluptate amet distinctio cum, tempore iure magni nam aliquam',
    },
]

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) =>{
        return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}buttermilk pancakes</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
           ${item.desc}
          </p>
        </div>
      </article> 
          `
});

    //console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    //console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}


const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];

const displayMenuButtons = () => {
    let menuButtons = categories.map((category) =>{
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    })
    console.log('displayButtons before join', menuButtons);
    menuButtons = menuButtons.join('');
    console.log('displayButtons after join', menuButtons);
    btnContainer.innerHTML = menuButtons;
}

window.addEventListener('DOMContentLoaded',() => {
    displayMenuItems(menu);
    displayMenuButtons();
});
