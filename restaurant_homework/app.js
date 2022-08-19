//app.js

/*
Create A Restaurant Site -[HTML,CSS,JS]
Create the Following Objects:
MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]
--> Each menu item must have MINIMUM 6items with at least 4attributes/properties..
*/

//must make the script tag type="module" for imports to work
import menu from './menu.js';

// basically, the onload event -- show the menu immediately
window.addEventListener('DOMContentLoaded', () => {
  showMenu();
});

const showMenu = () => {
  //target main content div
  const main = document.querySelector(".main");

  //attach a <ul> to the DOM in .main
  const ul = main.appendChild(document.createElement('ul'));

  // populate the <ul> with menu{} entries:
  //  as <li> containing menu name and nested <ul> of menu items
  for (const [key, value] of Object.entries(menu)) {
    // the <li> text will be the top-level key
    // submenu will contain the nested <ul>

    const li = ul.appendChild(document.createElement('li'));
    main.appendChild(li);

    // give a class to the <li> for styling
    li.classList.add('menu-name');
    li.innerHTML = `${key}`;//  ${submenuContent(value)}`;

    console.log(submenuContent(value));
    li.appendChild(submenuContent(value));
  }
}

// return a <ul> to be nested in the top-level menu <ul>
const submenuContent = (submenu) => {
  let content = ""; //will be returned
  // console.log(submenu)
  let ul = document.createElement('ul');

  //give ul a class to style
  ul.classList.add('submenu-ul');

  for (const [sub, props] of Object.entries(submenu)) {
    // sub will be the key of the menu item, e.g. 'eggsBenedict'
    // props contains the, you know, props. Like 'description'
    for (const [key, value] of Object.entries(props)) {
      let li = document.createElement('li');
      let ulInner = document.createElement('ul');

      // key should be the menu item props, e.g. 'title','description'...
      //   & will be the title of each ulInner
      ulInner.innerHTML =
        key === 'title' || key === 'description' ?
          '' : key;

      //give ulInner a class to style
      ulInner.classList.add('ul-inner');

      if (key === 'title') {
        ulInner.classList.add('item-title');
      }
      if (key === 'description') {
        ulInner.classList.add('hidden-key');
      }


      let liInner = document.createElement('li');
      ulInner.appendChild(liInner);

      // console.log(`${value}`);
      liInner.innerHTML = `${value}`;

      // give liInner a class to style
      liInner.classList.add('li-inner');

      // actually attach to parent
      ulInner.appendChild(liInner);
      li.appendChild(ulInner);
      ul.appendChild(li);
    }
  }
  return ul;
}