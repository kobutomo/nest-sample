import { Resolver, Query, Args } from '@nestjs/graphql';
import { Articles } from './articles';
import { Int } from 'type-graphql';
import axios from 'axios';

const QIITA_API = 'https://qiita.com/api/v2/items?page=1&per_page=';

type QiitaArticle = {
  title: string;
  body: string;
  created_at: string;
};

@Resolver('Qiita')
export class QiitaResolver {
  @Query(() => [Articles])
  async articles(
    @Args({ name: 'id', type: () => Int, nullable: true })
    id = 20,
  ): Promise<Articles[]> {
    const res = await axios.get<QiitaArticle[]>(QIITA_API + id);
    const articles = res.data;
    const normalizeArticles = articles.map(obj => {
      const { title, created_at } = obj;
      return { title, created_at };
    });

    return normalizeArticles;
  }
}
