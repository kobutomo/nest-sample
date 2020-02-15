import { Test, TestingModule } from '@nestjs/testing';
import { QiitaResolver } from './qiita.resolver';

describe('QiitaResolver', () => {
  let resolver: QiitaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QiitaResolver],
    }).compile();

    resolver = module.get<QiitaResolver>(QiitaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
