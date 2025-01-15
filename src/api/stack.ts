import data from '@/assets/data.json';
import { Stack } from '@/types/stack';

export function getStackData(): Promise<Stack[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then(
    (response) => response.stack
  );
}
