import HomePage from './pages/Home.mjs';
import NotFoundPage from './pages/NotFound.mjs';

const routes = new Map();

routes.set('/home', HomePage);
routes.set('/404', NotFoundPage);

function init() {
  const path = window.location.pathname;
  let routeFunction = routes.get(path === '/' ? '/home' : path);

  if(!routeFunction) {
      routeFunction = routes.get('/404');
  }

  routeFunction();
}

init();
