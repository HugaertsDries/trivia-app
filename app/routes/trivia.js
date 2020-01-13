import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TriviaRoute extends Route {
    async model() {
        // TODO proxy to https://opentdb.com/api.php
        return await fetch('https://opentdb.com/api.php?amount=10').then(async function (response) {
            return await response.json();
        });
    }
}