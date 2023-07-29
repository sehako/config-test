import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { get } from 'http';

@Controller()
export class AppController {
  //ConfigService 주입
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    //환경 변수 읽어오기
    const message = this.configService.get('MESSAGE');
    return message;
  }

  @Get('/service-url')
  getServiceUrl(): string {
    return this.configService.get('SERVICE_URL');
  }

  @Get('db-info')
  getTest(): string {
    console.log(this.configService.get('logLevel'));
    console.log(this.configService.get('apiVersion'));

    //브라우저에 dbInfo 출력
    return this.configService.get('dbInfo');
  }

  @Get('redis-info')
  getRedisInfo(): string {
    return `${this.configService.get('redis.host')}:${this.configService.get('redis.port')}`;
  }
}
