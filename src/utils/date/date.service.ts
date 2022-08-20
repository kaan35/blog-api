import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  currentDate() {
    return new Date().toLocaleDateString('en-GB', {}).replace(',', '');
  }

  currentDateTime() {
    return new Date()
      .toLocaleDateString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })
      .replace(',', '');
  }

  currentDateTimeStamp() {
    return new Date().toJSON();
  }
}
