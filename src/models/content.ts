import { GraphQLModel } from '@wizeworks/graphql-factory';
import Category from './content_category';
const Content: GraphQLModel = {
    name: 'Content',
    fields: {
        id: { type: 'uuid', required: true, defaultValue: 0 },
        parentId: { type: 'uuid', required: false },
        published: { type: 'boolean', required: true, defaultValue: false },
        contentStatusId: { type: 'uuid', required: true },
        title: { type: 'string', required: true },
        subtitle: { type: 'string', required: false },
        slug: { type: 'string', required: true },
        excerpt: { type: 'string', required: false },
        body: { type: 'string', required: true, defaultValue: '' },
        image: { type: 'string', required: false },
        contentCategoryId: {type: 'string', required: true },
        tags: { type: 'string', required: false },
        metadataKeywords: { type: 'string', required: false },
        metadataDescription: { type: 'string', required: false },
        publishedAt: { type: 'datetime', required: false },
        publishedBy: { type: 'string', required: false },
        createdAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        createdBy: { type: 'string', required: true },
        updatedAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        updatedBy: { type: 'string', required: true },

        // category: {
        //     type: Category,
        //     required: false,
        //     defaultValue: null,
        // }
    }
};

export default Content;