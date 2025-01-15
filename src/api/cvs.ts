import data from '@/assets/data.json';
import { Cv } from '@/types/cvs';

export function getCvsData(): Promise<Cv[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then(
    (response) => response.cvs
  );
}
