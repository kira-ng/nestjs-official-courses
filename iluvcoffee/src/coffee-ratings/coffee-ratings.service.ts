import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class CoffeeRatingsService {
  constructor(private readonly coffeesService: CoffeesService) {}
}
