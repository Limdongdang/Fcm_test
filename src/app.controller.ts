import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FireBaseService } from './firebase.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly firebaseservice: FireBaseService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('fcm')
  async sendNotification(): Promise<any> {
    console.log('sendNotification');
    const token = '';
    const title = '알림 제목';
    const message = '알림 메시지';

    return this.firebaseservice.sendMessageToToken(token, title, message);
  }
}
