import { IItem } from '@myapp/api-models';
import { Topic } from '@myapp/shared-models';
import { EnumToArray } from '@myapp/shared-lib';
import * as mongoose from 'mongoose';

type ItemType = IItem & mongoose.Document;

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number, required: true },
    topic: { type: String, enum: [...EnumToArray(Topic)], default: null },
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
