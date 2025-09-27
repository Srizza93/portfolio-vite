import data from '@/assets/data.json';
import { Project } from '@/types/project';

export function getWorkProjectsData(): Promise<Project[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then(
    (response) => response.workProjects
  );
}

export function getStudyProjectsData(): Promise<Project[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data))).then(
    (response) => response.studyProjects
  );
}
