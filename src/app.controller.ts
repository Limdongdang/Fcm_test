import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fcm')
  async sendNotification(): Promise<any> {
    const token = '디바이스 토큰';
    const title = '알림 제목';
    const message = '알림 메시지';

    // FcmService의 fcm 메서드를 호출하여 FCM 메시지를 보냅니다.
    return;
  }
}
