import { Topic } from '@myapp/shared-models';

export class Data {
  question: string;
  answer: string;
  topic: Topic;
  subTopic: string;
  tags: Array<string>[];
}
