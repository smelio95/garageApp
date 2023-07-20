// admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {
    this.insertAdmin();
  }

  async insertAdmin(): Promise<void> {
    const existingAdmin = await this.adminRepository.findOne( { where: { email: 'admin@garagevparrot.com' }});
  
    if (existingAdmin) {
      // L'administrateur existe déjà, vous pouvez le mettre à jour si nécessaire
      existingAdmin.password = 'admin123';
      await this.adminRepository.save(existingAdmin);
    } else {
      // L'administrateur n'existe pas encore, vous pouvez l'insérer normalement
      const admin = new Admin();
      admin.email = 'admin@garagevparrot.com';
      admin.password = 'admin123';
      await this.adminRepository.save(admin);
    }
  }
  
  async getAllAdmins(): Promise<Admin[]> {
    return this.adminRepository.find();
  }
  
  async getAdminById(id: number): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: {id} });
  }

  async getAdminByEmail(email: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: {email} });
  }

  async createAdmin(email: string, password: string): Promise<Admin> {
    const admin = new Admin();
    admin.email = email;
    admin.password = password;
    return this.adminRepository.save(admin);
  }

  async deleteAdminById(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }
}
