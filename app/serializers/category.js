import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class CategorySerializer extends JSONAPISerializer {

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        return {
            data: payload.trivia_categories.map((category) => {
                return {
                    id: category.id,
                    type: 'category',
                    attributes: {
                        content: category.name
                    }
                }
            })
        };
    }
}
