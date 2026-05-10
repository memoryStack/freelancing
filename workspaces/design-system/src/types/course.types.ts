export interface Course {
  name: string;
  duration: string;
  fee: string;
  features: string[];
}

export interface DemoSchedule {
  [courseName: string]: string;
}
