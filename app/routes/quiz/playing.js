import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizPlayingRoute extends Route {
    @service('trivia-fetch') service;

    async model(queryParams) {
        let { difficulty, category } = queryParams;
        return await this.service.getTrivia(difficulty, category, "", 10);
    }
}
