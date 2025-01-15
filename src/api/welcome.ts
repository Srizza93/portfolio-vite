import data from '@/assets/data.json';
import { WelcomeDto } from '@/types/welcomeDto';

export function getWelcomeData(): Promise<WelcomeDto> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then((response) => {
    const personalInfo = response.personalInfo;
    return {
      name: personalInfo.name,
    };
  });
}
