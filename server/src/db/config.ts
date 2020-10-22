const config = {
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: 'graphql',
    password: '123456',
    port: process.env.DATABASE_PORT || 8006,
    database: 'wardrobe',
    charset: 'utf8',
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default config;
