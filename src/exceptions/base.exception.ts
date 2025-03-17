export abstract class BaseException extends Error {
  readonly error?: Error;

  constructor(message: string, error?: Error) {
    super(message);
    this.error = error;
  }
}
