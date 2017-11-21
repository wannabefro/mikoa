require('reflect-metadata');
const { createConnection } = require('typeorm');

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'mikoa_dev',
  entities: [
    `${__dirname}../models/*.js`,
  ],
  synchronize: true,
});
