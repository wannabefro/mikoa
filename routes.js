const router = require('koa-router')();

const init = (app) => {
  router.get('/', async ctx => {
    ctx.body = 'MIKOA';
  });

  app.use(router.routes());
};

module.exports.init = init;
