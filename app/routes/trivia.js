import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TriviaRoute extends Route {
    async model() {
        let response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
            .then(async function (response) {
                return await response.json();
            });

        return response.results.find(trivia => trivia.correct_answer === "True")
    }
}