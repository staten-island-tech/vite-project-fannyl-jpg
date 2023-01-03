const menu = [
  {
    title: "Shoyu (soy sauce)",
    category: "ramen",
    price: 18.99,
    img: "miso.jpg",
  },
  {
    title: "Shio (salt)",
    category: "ramen",
    price: 19.99,
    img: "Shio.jpg",
  },
  {
    title: "Miso (soybean paste)",
    category: "ramen",
    price: 17.99,
    img: "Miso.jpg",
  },
  {
    title: "Tonkotsu (pork bone)",
    category: "ramen",
    price: 13.99,
    img: "Tonkotsu.jpg",
  },
  {
    title: "Chashu",
    category: "toppings",
    price: 3.99,
    img: "Chashu.jpg",
  },
  {
    title: "Menma",
    category: "toppings",
    price: 8.99,
    img: "menma.jpg",
  },
  {
    title: "Negi",
    category: "toppings",
    price: 4.99,
    img: "Negi.jpg",
  },
  {
    title: "Gyoza",
    category: "sides",
    price: 9.99,
    img: "Gyoza.jpg",
  },
  {
    title: "Fried rice",
    category: "sides",
    price: 7.99,
    img: "Friedrice.jpg",
  },
  {
    title: "Drinks",
    category: "sides",
    price: 2.99,
    img: "Drinks.jpg",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
       
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

/* 
export { menu }; */