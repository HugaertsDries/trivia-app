import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TriviaRoute extends Route {
    @service('trivia-fetch') service;

    async model() {
        // let trivia = await this.service.getTrivia("", "", "boolean", 10);
        // return trivia.find(trivia => trivia.correct_answer === "True")
        return this.store.query('trivia', {
            amount: 5,
            type: "boolean"
        }).then(function (results) {
            return results.find(trivia => trivia.correct_answer === "True");
        });
    }
}