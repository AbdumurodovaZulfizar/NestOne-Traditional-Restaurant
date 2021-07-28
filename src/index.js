import './style.css';
import Logo from './header-logo.png';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact'

const container = document.querySelector(".container1");

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}


function addClass(button) {
  button.classList.add("button-nav");
  button.classList.add("mx-3");
  button.classList.add("main-font");
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
    loadHome();
  });


  const menuButton = document.createElement("button");
  addClass(menuButton);
  menuButton.innerHTML = "<h5>Menu</h5>";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  addClass(contactButton);
  contactButton.innerHTML = '<h5>Contact</h5>';
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });
  

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

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

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}


function createFooter(){
  const footer = document.createElement("footer");
  footer.classList.add("black-back");
  footer.classList.add("mt-5");

  const innerdiv = document.createElement("div");
  innerdiv.classList.add("px-4");
  innerdiv.classList.add("py-3");
  innerdiv.classList.add("d-flex");
  innerdiv.classList.add("flex-row");
  innerdiv.classList.add("justify-content-between");

  const firstdiv = document.createElement("div");
  const myLogo = new Image();
  myLogo.src = Logo;
  firstdiv.appendChild(myLogo);

  const copy = document.createElement("small");
  copy.classList.add("d-block");
  copy.classList.add("text-white");
  copy.classList.add("main-font");
  copy.innerText = "© 2021 | Zulfizar Abdumurodova";
  firstdiv.appendChild(copy);

  const seconddiv = document.createElement("div");
  seconddiv.classList.add("d-flex");
  seconddiv.classList.add("flex-row");
  seconddiv.classList.add("pt-3");

  const item1 = document.createElement("div");
  const link1 = document.createElement("a");
  link1.setAttribute("href", "https://www.linkedin.com/in/zulfizarabdumurodova/");
  link1.classList.add("text-white");
  link1.innerHTML = '<i class="fab fa-linkedin fa-2x px-3"></i>';
  const item2 = document.createElement("div");
  const link2 = document.createElement("a");
  link2.setAttribute("href", "https://github.com/AbdumurodovaZulfizar");
  link2.classList.add("text-white");
  link2.innerHTML = '<i class="fab fa-github fa-2x"></i>';
  item1.appendChild(link1);
  item2.appendChild(link2);
  seconddiv.appendChild(item1);
  seconddiv.appendChild(item2);
  innerdiv.appendChild(firstdiv);
  innerdiv.appendChild(seconddiv)
  footer.appendChild(innerdiv);
  return footer;
}


function createWebsite(){
  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

createWebsite();