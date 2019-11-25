// https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18

interface Route {
  uri: string;
  callback: (req: any) => void;
}

export class Router {
  route: Route;
  routes: Route[];

  constructor(){
    this.routes = [];
  }

  get(uri: string, callback: (req: any) => void) {
  // get(r: Route) {
    if(!uri || !callback) throw new Error('uri or callback must be given');
    if(typeof uri !== "string") throw new TypeError('typeof uri must be a string');
    if(typeof callback !== "function") throw new TypeError('typeof callback must be a function');

    this.routes.forEach((route: Route) => {
      if(route.uri === uri) throw new Error(`the uri ${route.uri} already exists`);
    });
    this.routes.push({uri: uri, callback: callback});
  }

  //
  init(){
    this.routes.some(route=>{
      let regEx = new RegExp(`^${route.uri}$`);
      let path = window.location.pathname;

      if(path.match(regEx)){
        let req = { path }
        return route.callback.call(this, req);
      }
    })
  }
}