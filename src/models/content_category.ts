import { GraphQLModel } from '@wizeworks/graphql-factory';
const Category: GraphQLModel = {
    name: 'Category',
    fields: {
        id: { type: 'uuid', required: true, defaultValue: 0 },
        name: { type: 'string', required: true },
        description: { type: 'string', required: false },
        createdAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        createdBy: { type: 'string', required: true },
        updatedAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        updatedBy: { type: 'string', required: true }
    }
};

export default Category;