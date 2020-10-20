import { Pant } from '../models/Pant';

export const resolvers = {
  Query: {
    allPants: async (): Promise<Pant[]> => Pant.query(),
  },

  Mutation: {
    createPant: async (_: unknown, data: Pant): Promise<Pant> =>
      Pant.query().insert(data),
  },
};
