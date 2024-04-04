import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FcmService } from './fcm.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FcmService],
})
export class AppModule {}
