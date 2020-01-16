import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class TriviaAdapter extends JSONAPIAdapter {
    host = 'https://opentdb.com'
    urlForQuery() {
        return `${this.host}/api.php`;
    }
}
