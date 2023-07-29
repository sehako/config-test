import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('weather')
export class WeatherController {
    //의존성 주입
    constructor(private configService: ConfigService) {}

    @Get()
    public getWeather(): string {
        //환경 변수값 가져오기
        const apiUrl = this.configService.get('WEATHER_API_URL');
        const apiKey = this.configService.get('WEATHER_API_KEY');

        return this.callWeatherApi(apiUrl, apiKey);
    }

    private callWeatherApi(Url: string, Key: string): string {
        console.log('날씨 정보 가져오는 중...');
        console.log(Url);
        console.log(Key);
        return '날씨 정보'
    }
}
