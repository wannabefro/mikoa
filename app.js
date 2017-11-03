const Koa = require('koa');
const app = new Koa();
const routes = require('./routes');

routes.init(app);
app.listen(3000);
