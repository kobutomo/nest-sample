import { Resolver, Query } from '@nestjs/graphql';
import { Weather } from './weather';
import axios from 'axios';

const TENKI_API =
  'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010';

@Resolver('Weather')
export class WeatherResolver {
  @Query(() => Weather)
  async weather(): Promise<Weather> {
    const res = await axios.get(TENKI_API);
    const { title, forecasts, description } = res.data;
    const telop = forecasts[0].telop;
    const text = description.text;
    return { title, telop, description: text };
  }
}
