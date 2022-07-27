export interface IProjectItem {
  img: string;
  resume: string;
  activities: string[];
  stack: ITech[]
}

interface ITech {
  name: string;
  path: string;
}