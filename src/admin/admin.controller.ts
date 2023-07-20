// admin.controller.ts
import { Controller, Get, Post, Delete, Param, Body, HttpStatus, HttpException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  /*
  @Get()
  async getAdmin(): Promise<Admin | undefined> {
    const id = 1; // L'ID de l'administrateur que vous souhaitez récupérer
    return this.adminService.getAdminById(id);
  }*/

  @Get(':id')
  async getAdminById(@Param('id') id: number): Promise<Admin | undefined> {
    return this.adminService.getAdminById(id);
  }

  @Get()
  async getAdmins(): Promise<Admin[]> {
    return this.adminService.getAllAdmins();
  }

  @Post()
  async createAdmin(@Body() createAdminDto: { email: string; password: string }) {
    try {
      const admin = await this.adminService.createAdmin(createAdminDto.email, createAdminDto.password);
      return admin;
    } catch (error) {
      throw new HttpException('Erreur lors de la création de l\'administrateur', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteAdmin(@Param('id') id: number): Promise<void> {
    const admin = await this.adminService.getAdminById(id);
    if (!admin) {
      throw new HttpException('Administrateur introuvable', HttpStatus.NOT_FOUND);
    }
    await this.adminService.deleteAdminById(id);
}

}
