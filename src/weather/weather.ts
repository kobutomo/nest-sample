import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Weather {
  @Field()
  title: string;

  @Field()
  telop: string;

  @Field()
  description: string;
}
