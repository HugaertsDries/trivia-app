import JSONAPISerializer from '@ember-data/serializer/json-api';
import uuid from 'uuid/v4';

export default class TriviaSerializer extends JSONAPISerializer {

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        return {
            data: payload.results.map((trivia) => {
                return {
                    id: uuid(),
                    type: 'trivia',
                    attributes: trivia
                }
            })
        };
    }
}
