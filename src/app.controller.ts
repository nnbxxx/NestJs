/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Render('home')
  getHello() {
    console.log(this.configService.get<string>('PORT'));

    return;
  }
}
