import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingsModule } from './coffee-ratings/coffee-ratings.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'asdf1234',
      // database: 'postgres',
      // autoLoadEntities: true,
      // synchronize: true,

      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'asdf1234',
      database: 'iluvcoffee',
      autoLoadEntities: true,
      synchronize: false,
    }),
    CoffeeRatingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
