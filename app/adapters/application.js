import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = 'https://opentdb.com';

    buildURL(modelName) {
        switch (modelName) {
            case 'trivia':
                return `${this.host}/api.php`;
            case 'category':
                return `${this.host}/api_category.php`;
            default:
                return this.super(...arguments);
        }
    }
}
