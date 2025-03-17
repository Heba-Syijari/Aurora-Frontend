import { BaseException } from './base.exception';

export class NetworkErrorException extends BaseException {
  constructor() {
    super('Network error: please check your network connection.');
  }
}
