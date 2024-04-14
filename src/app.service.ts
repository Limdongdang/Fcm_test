import { Injectable } from '@nestjs/common';
import { getMessaging, Messaging } from 'firebase/messaging';
import admin from 'firebase-admin';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return 'Hello World!!!!!!!';
  }
}
