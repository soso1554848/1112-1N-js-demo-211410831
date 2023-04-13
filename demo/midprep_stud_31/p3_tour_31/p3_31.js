let tours_31 = [
  {
    id: 1,
    name: 'Best Of Paris In 7 Days Tour',
    info: 'Paris is synonymous with the finest things that culture canParis is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On thistour, your Paris-savvy Rick Steves guide will immerse you in the very best of',
    local_img: './img/paris.jpg',
    price: 1995
  },
  {
    id: 2,
    name: 'Best of Ireland in 14 Days Tour',
    info: 'Rick Steves Best of Ireland tour kicks off with the best of Dublin, followed by Irelands must-see historical sites,charming towns, music-filled pubs, and seaside getaways —including Kinsale, the D...',
    local_img: './img/ireland.jpeg',
    price: 3895
  },
  {
    id: 3,
    name: 'Best of Salzburg &amp; Vienna in 8 Days Tour',
    info: 'Lets go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit ofBavaria and opulence of Austrias Golden Age. Your Rick Stevesguide will bring th...',
    local_img: './img/vienna.jpeg',
    price: 2695
  },
  {
    id: 4,
    name: 'Best of Rome in 7 Days Tour',
    info: 'Our Rome tour serves up Europes most intoxicating brew of dazzling art, earth-shaking history, and city life with style.On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...',
    local_img: './img/italy.jpeg',
    price: 2095
  },
  {
    id: 5,
    name: 'Best of Poland in 10 Days Tour',
    info: 'Starting in the colorful port city of Gdańsk, youll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...',
    local_img: './img/poland.jpeg',
    price: 2595
  },
];

const section = document.querySelector('.section-center');

const displayTours_31 = () => {
  const toursInfo = tours_31.map((tour) => {
    const {id, name, info, local_img, price} = tour;
    return `
    <article class="single-tour">
    <img
      src=${local_img}
      alt=${name}
    />
    <footer>
      <div class="tour-info">
        <h4>${name}</h4>
        <h4 class="tour-price">$${price}</h4>
      </div>
      <p>${info}
      <button>read more</button>
      </p>
      <button class="delete-btn">not interested</button>
    </footer>
  </article>
    `
  }).join('');
  section.innerHTML = toursInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTours_31();
});
