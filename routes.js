const router = require('koa-router')();

router.get('/', async ctx => {
  ctx.body = 'MIKOA';
});

module.exports = router.routes();
