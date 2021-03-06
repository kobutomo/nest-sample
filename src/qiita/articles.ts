import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Articles {
  @Field()
  title: string;

  @Field()
  created_at: string;
}
