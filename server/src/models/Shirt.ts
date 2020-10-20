import { Model } from 'objection'

export class Shirt extends Model {
  id!: number
  name!: string
  color!: 'white' | 'grey' | 'blue'
  width!: number
  length!: number

  static tableName = 'shirts'
}
