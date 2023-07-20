import { Controller, Get, Param } from '@nestjs/common';
import { Vehicle } from './entities/vehicle.entity';
import { VehiclesService } from './vehicle.service';


@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  async getAllUsedVehicles(): Promise<Vehicle[]> {
    return this.vehiclesService.getAllVehicles();
  }

  @Get(':id')
  async getVehiclesById(@Param('id') id: number): Promise<Vehicle> {
    return this.vehiclesService.getVehiclesById(id);
  }
}
