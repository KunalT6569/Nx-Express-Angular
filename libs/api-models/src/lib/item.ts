import { Topic } from '@myapp/shared-models';

export interface IItem {
  name: string;
  description: string;
  age: number;
  topic: Topic;
  tags: Array<string>[];
}
