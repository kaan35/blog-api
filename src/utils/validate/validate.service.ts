import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidateService {
  email(email) {
    return /[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/.test(email);
  }
}
