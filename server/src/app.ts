import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as Knex from 'knex';
import { Model } from 'objection'
import { ApolloServer } from 'apollo-server-express';

import knexConfig from './db/config';
import schema from './schema';
import resolvers from './resolvers';

const port = process.env.PORT || 5000;

const knex = Knex(knexConfig)
Model.knex(knex)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () =>
  console.log(`� Server running at http://localhost:${port}`),
);
