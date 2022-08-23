import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['vanilla', 'cream'],
    },
  ];

  create(createCoffeeDto: CreateCoffeeDto) {
    // this.coffees.push(createCoffeeDto);
    return 'This action adds a new coffee';
  }

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee not found for ${id}`);
    }
    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
