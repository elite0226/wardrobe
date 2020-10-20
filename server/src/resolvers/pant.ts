import { Pant } from '../models/Pant'

export const resolvers = {
  Query: {
    allPants: async () => Pant.query(),
  },

  Mutation: {
    createPant: async(_: any, data: Pant) => Pant.query().insert(data)
  },
}
