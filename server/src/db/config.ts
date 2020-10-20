const config = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'graphql',
    password: '123456',
    port: 8006,
    database: 'wardrobe',
    charset: 'utf8',
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default config;
