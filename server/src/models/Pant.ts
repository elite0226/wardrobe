import { Model } from 'objection';

export class Pant extends Model {
  id!: number;
  name!: string;
  color!: string;
  width!: number;
  length!: number;

  static tableName = 'pants';
}
