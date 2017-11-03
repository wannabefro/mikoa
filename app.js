const Koa = require('koa');
const routes = require('./config/routes');

const app = new Koa();

routes.init(app);
app.listen(3000);
