const menu = [
  {
    name: "Shoyu (soy sauce)",
    vegetarian: false,
    price: 14.0,
    img: "./images/Miso.jpg",
    inStock: true,
  },
  {
    name: "Shio (salt)",
    vegetarian: false,
    price: 14.0,
    img: "./images/Shio.jpg",
    inStock: true,
  },
  {
    name: "Miso (soybean paste)",
    vegetarian: false,
    price: 18.0,
    img: "./images/Miso.jpg",
    inStock: true,
  },
  {
    name: "Tonkotsu (pork bone)",
    vegetarian: false,
    price: 16.0,
    img: "./images/Tonkotsu.jpg",
    inStock: false,
  },
  {
    name: "Roast Chicken",
    vegetarian: false,
    price: 8.0,
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Steak",
    vegetarian: false,
    price: 10.0,
    img: "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    inStock: false,
  },
  {
    name: "Cheeseburger",
    vegetarian: false,
    price: 6,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",
    inStock: true,
  },
  {
    name: "Ice Cream",
    vegetarian: false,
    price: 3.0,
    img: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

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
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
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

/* export { menu }; */
