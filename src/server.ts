// src/server.ts

import './config/dotenv';

import express from 'express';
import { MongoClient } from 'mongodb';
import { createYoga } from 'graphql-yoga';
import { createServerSchema, createServerContext, registerSchemaRoutes } from '@wizeworks/graphql-factory-mongo';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const database = process.env.MONGO_DB || 'wize-content';
const mongoClient = new MongoClient(MONGO_URI);


const start = async () => {
    await mongoClient.connect();

    const yoga = createYoga({
        graphqlEndpoint: '/graphql',
        schema: (args) => createServerSchema(args.request, mongoClient, database),
        context: async ({request}) => {
            const baseContext = await createServerContext(request, mongoClient);
            
            return {
                ...baseContext,
                database
            };
        },
        graphiql: true
    });

    const app = express();
    app.use(express.json());
    
    const schema = registerSchemaRoutes(app, mongoClient, database);


    // Use Yoga as middleware in Express
    app.use(yoga.graphqlEndpoint, yoga);

    app.listen(port, () => {
        console.log(`🚀 wize-content API ready at http://localhost:${port}/graphql`);
    });
};

start();
