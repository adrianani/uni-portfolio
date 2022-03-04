import BaseLayout from './components/BaseLayout.mjs';
import HomePage from './pages/Home.mjs';
import NotFoundPage from './pages/NotFound.mjs';

const RouteComponentMap = new Map();

let basePath = '/';

if(window.location.hostname === 'adrianani.com') {
  basePath = '/uni-portfolio/'
}

RouteComponentMap.set(basePath + 'home', HomePage);
RouteComponentMap.set(basePath + '404', NotFoundPage);

function init() {
  const path = window.location.pathname;
  let RouteComponent = RouteComponentMap.get(path === basePath ? basePath + 'home' : path);

  if(!RouteComponent) {
      RouteComponent = RouteComponentMap.get(basePath + '404');
  }
  
  BaseLayout.appendChild(RouteComponent);

  document.body.appendChild(BaseLayout);
}

init();
