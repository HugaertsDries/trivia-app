import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizRoute extends Route {
    @service('trivia-fetch') service;

    async model() {
        let difficulties = await this.service.getDifficulties();
        let categories = await this.service.getCategories();
        return { categories, difficulties };
    }
}
