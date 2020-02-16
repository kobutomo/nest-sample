import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QiitaModule } from './qiita/qiita.module';
import { WeatherModule } from './weather/weather.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    QiitaModule,
    WeatherModule,
  ],
})
export class AppModule {}
