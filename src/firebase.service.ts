import { Injectable } from '@nestjs/common';
import { getMessaging, Messaging } from 'firebase/messaging';
import admin from 'firebase-admin';

const serviceAccount = require('../firebase/fcm-account.json');
@Injectable()
export class FireBaseService {
  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }

  async sendMessageToToken(
    token: string,
    score: string,
    time: string,
  ): Promise<string> {
    const message = {
      notification: {
        title: '알림 제목',
        body: '알림 메시지',
      },
      token: token,
    };
    console.log(message);

    try {
      const response = await admin.messaging().send(message);
      console.log('Successfully sent message:', response);
      return 'Message sent successfully';
    } catch (error) {
      console.log('Error sending message:', error);
      throw error;
    }
  }
}
