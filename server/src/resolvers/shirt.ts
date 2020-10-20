import { Shirt } from '../models/Shirt'

export const resolvers = {
  Query: {
    allShirts: async () => Shirt.query(),
  },
  Mutation: {
    createPant: async(_: any, data: Shirt) => Shirt.query().insert(data)
  }
}
