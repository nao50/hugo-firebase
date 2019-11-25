import { Router } from "./router";
import { Bulma } from "./bulma";

/*
** Router 
*/
const router = new Router();
router.init();

router.get('/', function(req) {
    console.log('req.path: ', req.path);
});
router.get('/login/', function(req) {
    console.log('req.path: ', req.path);
});

/*
** Bulma 
*/
const bulma = new Bulma();
bulma.openNavbarMenu();
