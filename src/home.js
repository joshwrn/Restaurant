const home = function () {
  const content = document.getElementById("content");
  createTop();
  createBottom();
};

const createTop = function () {
  const topSection = document.createElement("div");
  topSection.setAttribute("id", "top-section");
  const logo = document.createElement("img");
  logo.src = "/photos/logo.png";
  logo.setAttribute("id", "logo");
  content.appendChild(topSection);
  topSection.appendChild(logo);
};

const createBottom = function () {
  const bottomSection = document.createElement("div");
  bottomSection.setAttribute("id", "bottom-section");
  //! BOX ONE
  const boxOne = document.createElement("div");
  boxOne.setAttribute("id", "box-one");
  boxOne.classList.add("bottom-box");
  //header
  const orderHeader = document.createElement("h3");
  orderHeader.setAttribute("id", "bottom-box-header");
  orderHeader.innerText = "Order Online";
  //button
  const onlineButton = document.createElement("button");
  onlineButton.setAttribute("id", "online-button");
  onlineButton.innerHTML = `<i class="material-icons-outlined option-icon">
  phone_iphone </i> ORDER NOW`;
  //append elements
  bottomSection.appendChild(boxOne);
  boxOne.appendChild(orderHeader);
  boxOne.appendChild(onlineButton);
  content.appendChild(bottomSection);
  //! BOX TWO
  const boxTwo = document.createElement("div");
  boxTwo.setAttribute("id", "box-two");
  boxTwo.classList.add("bottom-box");
  // vintage logo
  const vintageLogo = document.createElement("img");
  vintageLogo.src = "/photos/vintage-logo.png";
  vintageLogo.setAttribute("id", "vintage-logo");
  //append elements
  bottomSection.appendChild(boxTwo);
  boxTwo.appendChild(vintageLogo);
  //! BOX THREE
  const boxThree = document.createElement("div");
  boxThree.setAttribute("id", "box-three");
  boxThree.classList.add("bottom-box");
  //header
  const reserveHeader = document.createElement("h3");
  reserveHeader.setAttribute("id", "bottom-box-header-three");
  reserveHeader.innerText = "Reserve A Table";
  //header under text
  const reserveText = document.createElement("p");
  reserveText.setAttribute("id", "bottom-box-text-three");
  reserveText.innerText = "Lorem ipsum dolor sit amet.";
  //reserve button
  const reserveButton = document.createElement("button");
  reserveButton.setAttribute("id", "reserve-button");
  reserveButton.innerHTML = `CLICK HERE`;
  //append elements
  bottomSection.appendChild(boxThree);
  boxThree.appendChild(reserveHeader);
  boxThree.appendChild(reserveText);
  boxThree.appendChild(reserveButton);
};

export { home };
