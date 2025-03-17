import { LOCAL_STORAGE_PREFIX } from 'src/config-global';

/* eslint-disable class-methods-use-this */

class Storage {
  private readonly tokenKey: string;

  constructor(storagePrefix: string) {
    this.tokenKey = `${storagePrefix}TOKEN`;
  }

  @IsAvailable
  setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  @IsAvailable
  getItem<T = any>(key: string): T {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  @IsAvailable
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  setToken(token: string) {
    this.setItem(this.tokenKey, token);
  }

  getToken(): string | undefined {
    return this.getItem(this.tokenKey);
  }

  clearToken() {
    this.removeItem(this.tokenKey);
  }
}

const storage = new Storage(LOCAL_STORAGE_PREFIX);

export default storage;

function IsAvailable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = typeof window === 'undefined' ? () => {} : originalMethod;

  return descriptor;
}
