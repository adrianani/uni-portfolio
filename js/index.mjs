import BaseLayout from './components/BaseLayout.mjs';
import HomePage from './pages/Home.mjs';
import NotFoundPage from './pages/NotFound.mjs';

const RouteComponentMap = new Map();

RouteComponentMap.set('/home', HomePage);
RouteComponentMap.set('/404', NotFoundPage);

function init() {
  const path = window.location.pathname;
  let RouteComponent = RouteComponentMap.get(path === '/' ? '/home' : path);

  if(!RouteComponent) {
      RouteComponent = RouteComponentMap.get('/404');
  }
  
  BaseLayout.appendChild(RouteComponent);

  document.body.appendChild(BaseLayout);
}

init();
