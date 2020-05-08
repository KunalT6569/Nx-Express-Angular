import { Data as DataModel } from '@myapp/api-models';
import { Topic } from '@myapp/shared-models';
import { EnumToArray } from '@myapp/shared-lib';
import * as mongoose from 'mongoose';

type ItemType = DataModel & mongoose.Document;

const itemSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    topic: { type: String, enum: [...EnumToArray(Topic)], default: null },
    subTopic: { type: String, required: true },
    tags: [{ type: String }]
  },
  { timestamps: true }
);

itemSchema.pre('save', function (next) {
  const obj = this as ItemType;
  obj.tags = [...new Set(obj.tags || [])];
  next();
});

export const Item = mongoose.model<ItemType>('Item', itemSchema);
