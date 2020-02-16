import { Module } from '@nestjs/common';
import { WeatherResolver } from './weather.resolver';

@Module({
  providers: [WeatherResolver]
})
export class WeatherModule {}
