import Rest from './rest.jpg';

const createHome = () => {
  const parentdiv = document.createElement('div');
  parentdiv.classList.add('row');
  const home = document.createElement('div');
  home.classList.add('m-5');
  home.classList.add('grey-back');
  home.classList.add('text-center');
  home.classList.add('text-white');
  home.classList.add('col-6');
  home.classList.add('mx-auto');

  const paragraph = document.createElement('h4');
  paragraph.classList.add('font');
  paragraph.classList.add('lh-base');
  paragraph.classList.add('py-4');

  paragraph.innerText = 'Welocome to Tashkent City\n NestOne offers thirty three different services to its customers in order to make their life more shining and comfortable\n This restaurant is only for you to feel the delicious tastes of life';

  const myRest = new Image();
  myRest.src = Rest;
  myRest.classList.add('img-size');

  const order = document.createElement('h5');
  order.classList.add('font');
  order.innerText = 'Book place and order Uzbek traditional foods beforehand';
  order.classList.add('py-4');
  home.appendChild(paragraph);
  home.appendChild(myRest);
  home.appendChild(order);

  return home;
};

export default function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}
