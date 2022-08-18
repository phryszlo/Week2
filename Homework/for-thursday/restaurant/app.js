//app.js

/*
Create A Restaurant Site -[HTML,CSS,JS]
Create the Following Objects:
MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]
--> Each menu item must have MINIMUM 6items with at least 4attributes/properties..
*/

/*
  Intent
    - Try to control sidebar with javascript vs. @media qry
*/

//must make the script tag type="module" for this to work
import menu from './menu.js';

let sidebarClosed = false;
const sidebarMinWidth = 700;

window.addEventListener('DOMContentLoaded', () => {
  //check window width and set sidebar status
  if (window.innerWidth < sidebarMinWidth) {
    sidebarClosed = true;
    console.log('sidebar closed');
  }
  // add event listeners
  window.addEventListener('resize', windowResize);

  showMenu();
});

const windowResize = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < sidebarMinWidth && !sidebarClosed) {
      sidebarClosed = true;
      console.log('close sidebar', sidebarClosed);
    }
    else if (window.innerWidth >= sidebarMinWidth && sidebarClosed) {
      sidebarClosed = false;
      console.log('open sidebar', sidebarClosed);
    }
}

const showMenu = () => {
  const main = document.querySelector(".main");
  const ul = main.appendChild(document.createElement('ul'));
  Object.keys(menu).forEach(subMenu => {
    const li = ul.appendChild(document.createElement('li'));
    main.appendChild(li);

    li.innerHTML = `${subMenu} :  ${menu[subMenu]}`;
  });
}

const submenuContent = (submenu) => {
  let content = "";
  Object.keys(menu[submenu]).forEach((item) => {
    content += item[0].length;
  });
  return content;
}