const Koa = require('koa');
const cors = require('@koa/cors');
const routes = require('./config/routes');
require('./config/db');

const app = new Koa();
app.use(cors());

routes.init(app);
app.listen(3000);
