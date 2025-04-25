import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from '../modules/cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
