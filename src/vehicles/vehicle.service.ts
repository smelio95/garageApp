import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async getAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async getVehiclesById(id: number): Promise<Vehicle | undefined> {
    return this.vehicleRepository.findOne({ where : {id}});
  }
}
