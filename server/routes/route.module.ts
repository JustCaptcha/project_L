import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { AuthModule } from '../logics/auth/auth.module';
import { ApiAuthController } from './api/auth.controller';
import { AuthController } from './auth.controller';
import { HomeController } from './home.controller';
import { ProfileController } from './profile.controller';

@Module({
  imports: [
    NextModule,
    AuthModule,
  ],
  controllers: [
    ApiAuthController,
    AuthController,
    HomeController,
    ProfileController,
  ],
})
export class RouteModule {}
