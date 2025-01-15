import data from '@/assets/data.json';
import { HomeDto } from '@/types/homeDto';

export function getHomeData(): Promise<HomeDto> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then((response) => {
    const personalInfo = response.personalInfo;
    return {
      name: personalInfo.name,
    };
  });
}
