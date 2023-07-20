import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';


import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

import { UsersModule } from './users/users.module';
import { EmployeModule } from './employe/employe.module';
import { AdminModule } from './admin/admin.module';
import { ServicesModule } from './services/services.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/**/*.entity.js'], 
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'secretkey', // Remplacez par une clé secrète plus sécurisée dans un environnement de production.
      signOptions: { expiresIn: '1h' }, // Durée de validité du token (1 heure dans cet exemple).
    }),
    UsersModule,
    EmployeModule,
    AdminModule,
    ServicesModule,
    
    
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
