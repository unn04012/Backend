import { Injectable, LoggerService, LogLevel } from '@nestjs/common';

@Injectable()
export class DefaultLogger implements LoggerService {
  private context: string;

  public log(message: any) {
    console.log(`${this.setDateTime()}/${this.context}/log/${message}`);
  }
  public error(message: any) {
    console.log(`${this.setDateTime()}/${this.context}/error/${message}`);
  }

  public debug?(message: any) {
    console.log(`${this.setDateTime()}/${this.context}/debug/${message}`);
  }

  public warn(message: any) {
    console.log(`${this.setDateTime()}/${this.context}/warn/${message}`);
  }

  public setContext(context: string) {
    this.context = context;
  }

  public verbose?(message: any, ...optionalParams: any[]): void;
  public setLogLevels?(levels: LogLevel[]): void;

  private setDateTime() {
    return `[${new Date().toISOString()}]`;
  }
}
