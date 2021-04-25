const menu = function () {
  const content = document.getElementById("content");
  createMenu();
  createFoodList();
  createImage();
  createDrinkList();
};

const createMenu = () => {
  //! menu page
  const menuPage = document.createElement("div");
  menuPage.setAttribute("id", "menu-page");
  //! menu
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  //! make menu header
  const menuHeader = document.createElement("h2");
  menuHeader.setAttribute("id", "menu-header");
  menuHeader.innerText = "Menu";
  //! create menu item grid
  const menuGrid = document.createElement("div");
  menuGrid.setAttribute("id", "menu-item-grid");
  //! append items
  content.appendChild(menuPage);
  menuPage.appendChild(menu);
  menu.appendChild(menuHeader);
  menu.appendChild(menuGrid);
};

//! create food list
const createFoodList = () => {
  const menuGrid = document.getElementById("menu-item-grid");
  const foodList = `<div id="food">
  <ul id="menu-starters">
      <h3 class="menu-header">Starters</h3>
      <li class="menu-item">Buffalo Wings or Tenders - $9.95</li>
      <li class="menu-item">Red Hook Ale Battered Popcorn - $8.95</li>
      <li class="menu-item">Lobster Bisque - $5.95</li>
      <li class="menu-item">Buffalo Wings or Tenders - $9.95</li>
  </ul>
  <ul id="menu-dinner">
      <h3 class="menu-header">Dinner</h3>
      <li class="menu-item">Buffalo Wings or Tenders - $9.95</li>
      <li class="menu-item">Red Hook Ale Battered Popcorn - $8.95</li>
      <li class="menu-item">Lobster Bisque - $5.95</li>
      <li class="menu-item">Buffalo Wings or Tenders - $9.95</li>
      <li class="menu-item">Red Hook Ale Battered Popcorn - $8.95</li>
      <li class="menu-item">Lobster Bisque - $5.95</li>
  </ul>`;
  const range = document.createRange();
  range.selectNode(document.getElementById("menu-item-grid"));
  const listFragment = range.createContextualFragment(foodList);
  menuGrid.appendChild(listFragment);
};

//! create menu logo
const createImage = () => {
  const menuGrid = document.getElementById("menu-item-grid");
  const menuLogo = document.createElement("img");
  menuLogo.src = "/photos/logo.png";
  menuLogo.setAttribute("id", "menu-logo");
  menuGrid.appendChild(menuLogo);
};

//! create drink list
const createDrinkList = () => {
  const menuGrid = document.getElementById("menu-item-grid");
  const drinkList = `<div id="drinks">
  <ul id="menu-wine">
      <h3 class="menu-header">Wine</h3>
      <li class="menu-item">Kleine Zalze Bush Vines Chenin $4.95</li>
      <li class="menu-item">Gavi, Enrico Serafino - $7.25</li>
      <li class="menu-item">Durbanville Hills Chardonnay - $5.85</li>
      <li class="menu-item">Parini Pinot Grigio delle Venezie - $5.60</li>
  </ul>
  <ul id="menu-red-wine">
      <h3 class="menu-header">Red Wine</h3>
      <li class="menu-item">Kleine Zalze Merlot, Coastal Region - $9.95</li>
      <li class="menu-item">Élevé Pinot Noir, Vin de France - $8.95</li>
      <li class="menu-item">Don Jacobo Crianza Rioja - $5.95</li>
      <li class="menu-item">Vine Trail Carmenère-Syrah, Rapel Valley - $9.95</li>
      <li class="menu-item">Pablo Old Vine Garnacha, Calatayud - $8.95</li>
      <li class="menu-item">Bocelli Sangiovese Toscana - $5.95</li>
  </ul>
</div>`;
  const range = document.createRange();
  range.selectNode(document.getElementById("menu-item-grid"));
  const listFragment = range.createContextualFragment(drinkList);
  menuGrid.appendChild(listFragment);
};

export { menu };
