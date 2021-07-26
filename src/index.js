import _, { create } from 'lodash';
import './style.css';
import Logo from './header-logo.png';

const container = document.querySelector(".container1");
function createHeader() {
  const header = document.createElement("header");
  header.classList.add("text-center");
  header.classList.add("black-back");
  header.innerHTML = '<h1 class="text-white py-4 font-style">NestOne Restaurant</h1>'
  const text = document.createElement("h4");
  text.innerText = "Reastaurant is one of the thirty three services of Nest Zone"
  text.classList.add("text-white");
  text.classList.add("font");
  header.appendChild(text);
  header.appendChild(createNavbar());
  return header;
}

function createNavbar() {
  const nav = document.createElement("nav");
  nav.classList.add("py-3");

  const homeButton = document.createElement("button");
  addClass(homeButton);
  homeButton.innerHTML = '<h5>Home</h5>';
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    // loadHome();
  });


  const menuButton = document.createElement("button");
  addClass(menuButton);
  menuButton.innerHTML = "<h5>Menu</h5>";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    // loadMenu();
  });

  const contactButton = document.createElement("button");
  addClass(contactButton);
  contactButton.innerHTML = '<h5>Contact</h5>';
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    // loadContact();
  });
  

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function addClass(button) {
  button.classList.add("button-nav");
  button.classList.add("mx-3");
  button.classList.add("main-font");
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}


function createFooter(){
  const footer = document.createElement("footer");
  footer.classList.add("black-back");

  const inner_div = document.createElement("div");
  inner_div.classList.add("container");
  inner_div.classList.add("row");
  inner_div.classList.add("py-3");

  const first_div = document.createElement("div");
  first_div.classList.add("col-12");
  const myLogo = new Image();
  myLogo.src = Logo;
  first_div.appendChild(myLogo);

  const copy = document.createElement("small");
  copy.classList.add("d-block");
  copy.classList.add("text-white");
  copy.classList.add("main-font");
  copy.innerText = "© 2021 | Zulfizar Abdumurodova";
  first_div.append(copy);

  const second_div = document.createElement("div");
  second_div.classList.add("col-12");
  second_div.classList.add("col-md-4");


  const sec_div_header = document.createElement("h5");
  sec_div_header.classList.add("main-font");
  sec_div_header.classList.add("text-white");
  sec_div_header.innerText = 'Features';

  second_div.appendChild(sec_div_header);

  const ul1 = document.createElement("ul");
  ul1.classList.add("list-unstyled");
  ul1.classList.add("text-small");

  const ul1_li1 = document.createElement("li");
  ul1_li1.classList.add("mb-1");

  const link1 = document.createElement("a");
  link1.classList.add("link-secondary");
  link1.classList.add("text-decoration-none");
  link1.setAttribute("href", "#");
  link1.innerText = "Cool staf";
  ul1_li1.appendChild(link1);
  ul1.appendChild(ul1_li1);

  const ul1_li2 = document.createElement("li");
  ul1_li2.classList.add("mb-1");

  const link2 = document.createElement("a");
  link2.classList.add("link-secondary");
  link2.classList.add("text-decoration-none");
  link2.setAttribute("href", "#");
  link2.innerText = "Cool staf";
  ul1_li2.appendChild(link2);
  ul1.appendChild(ul1_li2);

  const ul1_li3 = document.createElement("li");
  ul1_li3.classList.add("mb-1");

  const link3 = document.createElement("a");
  link3.classList.add("link-secondary");
  link3.classList.add("text-decoration-none");
  link3.setAttribute("href", "#");
  link3.innerText = "Cool staf";
  ul1_li3.appendChild(link3);
  ul1.appendChild(ul1_li3);

  const ul1_li4 = document.createElement("li");
  ul1_li4.classList.add("mb-1");

  const link4 = document.createElement("a");
  link4.classList.add("link-secondary");
  link4.classList.add("text-decoration-none");
  link4.setAttribute("href", "#");
  link4.innerText = "Cool staf";
  ul1_li4.appendChild(link4);
  ul1.appendChild(ul1_li4);

  inner_div.appendChild(first_div);
  second_div.appendChild(ul1);
  inner_div.appendChild(second_div);

  
  footer.appendChild(inner_div);
  return footer;
}
container.appendChild(createHeader());
container.appendChild(createFooter());