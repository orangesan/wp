import './menu.scss';

export default function (array,className) {
  var menu = document.createElement('ul');
  menu.className = className;
  var listItems = '';
  array.forEach((item) => {
    let li = document.createElement('li');
    li.innerHTML  = item;
    menu.appendChild (li);
  })
  return menu;
};
