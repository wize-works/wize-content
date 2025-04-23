import { GraphQLModel } from '@wizeworks/graphql-factory';
const Status: GraphQLModel = {
    name: 'Status',
    fields: {
        id: { type: 'uuid', required: true, defaultValue: 0 },
        status: { type: 'string', required: true },
        createdAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        createdBy: { type: 'string', required: true },
    }
};

export default Status;