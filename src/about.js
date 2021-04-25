const about = () => {
  createAboutPage();
};

const createAboutPage = () => {
  const content = document.getElementById("content");
  const fullPage = `<div id="about-page">
  <div id="about-text">

      <img id="about-logo" src="photos/logo.png">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button id="about-button">Learn More</button>
  </div>
  <div id="about-image"></div>
</div>`;
  const range = document.createRange();
  range.selectNode(document.getElementById("content"));
  const listFragment = range.createContextualFragment(fullPage);
  content.appendChild(listFragment);
};

export { about };
