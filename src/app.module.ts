import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import config from './configs/config';

console.log('env : ' + process.env.NODE_ENV)
console.log('current working dir : ' + process.cwd())
console.log(`${process.cwd()}/envs/${process.env.NODE_ENV}.env`);

@Module({
  //전역 모듈 설정 추가
  imports: [ConfigModule.forRoot({ isGlobal: true,
    envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
    load: [config],
    cache: true,
    expandVariables: true,
  }), 
  WeatherModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
