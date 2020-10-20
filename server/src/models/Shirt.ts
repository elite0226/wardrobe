import { Model } from 'objection';

export class Shirt extends Model {
  id!: number;
  name!: string;
  color!: 'white' | 'grey' | 'blue';
  size!: number;

  static tableName = 'shirts';
}
