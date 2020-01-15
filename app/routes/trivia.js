import Route from '@ember/routing/route';
// import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class TriviaRoute extends Route {
    @service('trivia-fetch') service;

    async model() {

        let trivia = await this.service.getTrivia("", "", "boolean", 10);
        // let response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        //     .then(async function (response) {
        //         return await response.json();
        //     });

        return trivia.find(trivia => trivia.correct_answer === "True")
    }
}