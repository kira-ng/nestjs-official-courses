import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'asdf1234',
  database: 'iluvcoffee',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  logging: true,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'migrations',
});
