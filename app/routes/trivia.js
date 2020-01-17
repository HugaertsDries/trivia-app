import Route from '@ember/routing/route';

export default class TriviaRoute extends Route {

    async model() {
        return this.store.query('trivia', {
            amount: 5,
            type: "boolean"
        }).then(function (results) {
            return results.find(trivia => trivia.correct_answer === "True");
        });
    }
}