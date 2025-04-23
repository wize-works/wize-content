import { GraphQLModel } from '@wizeworks/graphql-factory';
const Revision: GraphQLModel = {
    name: 'Revision',
    fields: {
        id: { type: 'uuid', required: true, defaultValue: 0 },
        contentId: { type: 'uuid', required: true },
        title: { type: 'string', required: true },
        subtitle: { type: 'string', required: false },
        slug: { type: 'string', required: true },
        body: { type: 'string', required: true, defaultValue: '' },
        updatedAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        updatedBy: { type: 'string', required: true }
    }
};

export default Revision;