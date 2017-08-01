import './index.scss';

import createMenu from '../../compoents/menu/menu.js';
let menu = createMenu(['Main','About'],'menu');
document.body.appendChild(menu);
