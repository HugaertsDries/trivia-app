import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizPlayingRoute extends Route {
    @service('quiz-game') gameService;
    @service('trivia-fetch') fetchService;

    async model(queryParams) {
        let { difficulty, category } = queryParams;
        let quiz = await this.fetchService.getTrivia(difficulty, category, "", 5);
        this.gameService.start(quiz);
        return quiz;
    }

    deactivate() {
        this.gameService.stop();
    }
}
