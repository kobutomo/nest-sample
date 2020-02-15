import { Module } from '@nestjs/common';
import { QiitaResolver } from './qiita.resolver';

@Module({
  providers: [QiitaResolver]
})
export class QiitaModule {}
