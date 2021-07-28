import Plov from './plov.jpg';
import Manti from './manti.jpg';
import Somsa from './somsa.jpg';
import Shashlik from './shashlik.jpg';

const createMenuItem1 = (name, descriptions, cost, Img) => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('menu-item');
  itemDiv.classList.add('black-back');
  itemDiv.classList.add('d-flex');
  itemDiv.classList.add('flex-row');
  itemDiv.classList.add('col-10');
  itemDiv.classList.add('float-start');
  itemDiv.classList.add('m-3');

  const textDiv = document.createElement('div');
  textDiv.classList.add('p-2');
  const nameOfFood = document.createElement('h4');
  nameOfFood.classList.add('font');
  nameOfFood.classList.add('text-center');
  nameOfFood.innerText = name;
  textDiv.appendChild(nameOfFood);

  const desc = document.createElement('p');
  desc.classList.add('main-font');
  desc.innerText = descriptions;
  textDiv.appendChild(desc);

  const price = document.createElement('h4');
  price.classList.add('main-font');
  price.innerText = cost;
  textDiv.appendChild(price);

  const imgDiv = document.createElement('div');
  const myMenu = new Image();
  myMenu.src = Img;
  myMenu.classList.add('m-3');
  myMenu.classList.add('menu-size');
  imgDiv.appendChild(myMenu);

  itemDiv.appendChild(textDiv);
  itemDiv.appendChild(imgDiv);

  return itemDiv;
}

const createMenuItem2 = (name, descriptions, cost, Img) => {
  const itemDiv1 = document.createElement('div');
  itemDiv1.classList.add('menu-item');
  itemDiv1.classList.add('black-back');
  itemDiv1.classList.add('d-flex');
  itemDiv1.classList.add('flex-row');
  itemDiv1.classList.add('col-10');
  itemDiv1.classList.add('float-end');
  itemDiv1.classList.add('m-3');

  const textDiv1 = document.createElement('div');
  textDiv1.classList.add('p-2');
  const nameOfFood1 = document.createElement('h4');
  nameOfFood1.classList.add('font');
  nameOfFood1.classList.add('text-center');
  nameOfFood1.innerText = name;
  textDiv1.appendChild(nameOfFood1);

  const desc1 = document.createElement('p');
  desc1.classList.add('main-font');
  desc1.innerText = descriptions;
  textDiv1.appendChild(desc1);

  const price1 = document.createElement('h4');
  price1.classList.add('main-font');
  price1.innerText = cost;
  textDiv1.appendChild(price1);

  const imgDiv1 = document.createElement('div');
  const myMenu1 = new Image();
  myMenu1.src = Img;
  myMenu1.classList.add('m-3');
  myMenu1.classList.add('menu-size');
  imgDiv1.appendChild(myMenu1);

  itemDiv1.appendChild(imgDiv1);
  itemDiv1.appendChild(textDiv1);

  return itemDiv1;
}

const createMenu = () => {
  const parentdiv = document.createElement('div');
  parentdiv.classList.add('row');
  const menu = document.createElement('div');
  menu.classList.add('m-5');
  menu.classList.add('grey-back');
  menu.classList.add('text-white');
  menu.classList.add('col-6');
  menu.classList.add('mx-auto');

  menu.appendChild(createMenuItem1('Plov', 'Plov is Uzbek traditional food that is cooked with tons of rice sometimes, beacouse it is extremely delicious, every foreign guest says that "Words really fail to describe its taste." \n Required products: Rice, Carrot, Onion, Meat, Oil, Peas, Raisins, Solt, etc...', '35$', Plov));

  menu.appendChild(createMenuItem2('Somsa', 'Somsa is ver nutritious type of food that is cooked in Tandir. Also this foot is prepared in every regioun of Uzbekistan \n Required products: Flour, fat, Meat, Oinion, Egg, Solt, etc...', '20$', Somsa));

  menu.appendChild(createMenuItem1('Manti', 'Manti is also a type of doughy foos, very delicious and yummy food, there are different types of this food in Our Country, without doubt you should try it \n Required products: Flour, Egg, Solt, Meat, Fat, Onion, etc...', '30$', Manti));

  menu.appendChild(createMenuItem2('Kebab', 'Kebab, especially prepared at southern regions of Uzbekistan frequently, it is almost fully meaty food, and cooke with skewereds \n Required products: Meat, Marinade, Onions, etc...', '20$', Shashlik));

  parentdiv.appendChild(menu);
  return parentdiv;
}

export default function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}
