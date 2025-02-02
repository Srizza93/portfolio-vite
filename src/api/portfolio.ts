import data from '@/assets/data.json';
import { Project } from '@/types/project';

export function getPortfolioData(): Promise<Project[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then(
    (response) => response.projects
  );
}
