import { Resolver, Query, Args } from '@nestjs/graphql';
import { Articles } from './articles';
import { Int } from 'type-graphql';
import axios from 'axios';

const QIITA_API = 'https://qiita.com/api/v2/items?page=1&per_page=20';

@Resolver('Qiita')
export class QiitaResolver {
  @Query(() => [Articles])
  async articles(
    @Args({ name: 'id', type: () => Int, nullable: true })
    id: number,
  ): Promise<Articles[]> {
    const res = await axios.get(QIITA_API);
    const { title, body, created_at } = res.data[0];

    return [{ title, body, created_at }];
  }
}
