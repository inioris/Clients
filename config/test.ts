const config = {
  port: 8000,
  /**
   * Database
   */
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    logging: false,
    entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
    migrationsTableName: 'app_migrations',
    migrations: ['dist/data/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'data/migrations',
      entitiesDir: `${__dirname}/../src/services/**/*.entity{.ts,.js}`,
    },
  },
};

export default config;
