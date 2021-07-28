const createContact = () => {
  const parentdiv = document.createElement('div');
  parentdiv.classList.add('row');
  const contact = document.createElement('div');
  contact.classList.add('m-5');
  contact.classList.add('grey-back');
  contact.classList.add('text-white');
  contact.classList.add('col-6');
  contact.classList.add('mx-auto');

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('black-back');
  contactDiv.classList.add('text-center');
  contactDiv.classList.add('m-3');
  contactDiv.classList.add('p-3');

  const mapDiv = document.createElement('div');
  mapDiv.classList.add('black-back');
  mapDiv.classList.add('text-center');
  mapDiv.classList.add('m-3');
  mapDiv.classList.add('p-3');

  const maptext = document.createElement('div');
  const mapword = document.createElement('h3');
  mapword.innerHTML = '<h3>NestOne Location:</h3>';
  mapDiv.classList.add('font');
  mapDiv.appendChild(mapword);
  maptext.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Uzbekistan Tashkent NestOne&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">FNF Mods</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div>';
  mapDiv.appendChild(maptext);

  const phoneNumber = document.createElement('h3');
  phoneNumber.textContent = 'Phone:';
  phoneNumber.classList.add('font');

  const number = document.createElement('h4');
  number.innerText = '71 200-22-88';
  number.classList.add('main-font');

  const web = document.createElement('h3');
  web.textContent = 'Offical Website:';
  web.classList.add('font');

  const link = document.createElement('h4');
  const href = document.createElement('a');
  href.setAttribute('href', 'https://nestone.uz/apartments/ru.html');
  href.innerText = 'Company NestOne';
  href.classList.add('main-font');
  href.classList.add('nav-link');
  link.appendChild(href);

  contactDiv.appendChild(phoneNumber);
  contactDiv.appendChild(number);
  contactDiv.appendChild(web);
  contactDiv.appendChild(link);
  contact.appendChild(contactDiv);
  contact.appendChild(mapDiv);
  parentdiv.appendChild(contact);
  return parentdiv;
}

export default function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}
