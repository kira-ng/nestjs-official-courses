import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { CoffeeRatingsService } from './coffee-ratings.service';

@Module({
  imports: [CoffeesModule],
  providers: [CoffeeRatingsService],
})
export class CoffeeRatingsModule {}
