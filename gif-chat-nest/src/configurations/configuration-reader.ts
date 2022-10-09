import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationReader {
  private _httpPort: number;
  constructor() {
    //init config
    this.readRootConfig();
  }
  private readRootConfig() {
    this._httpPort = Number(this._readOptionalConfig('HTTP_PORT', 3000));
  }

  public get httpPort() {
    return this._httpPort;
  }

  private _readMandatoryConfig(key: string): string {
    const value = process.env[key];
    if (!value) throw new Error(`${key} is required`);

    return value;
  }

  private _readOptionalConfig(key: string, defaultValue: string | number) {
    const value = process.env[key];

    return value ? value : defaultValue;
  }
}
