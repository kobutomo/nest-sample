import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QiitaModule } from './qiita/qiita.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    QiitaModule,
  ],
})
export class AppModule {}
