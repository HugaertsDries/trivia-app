import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizPlayingRoute extends Route {
    @service('quiz-game') gameService;

    async model(queryParams) {
        let { difficulty, category } = queryParams;
        let quiz = await this.store.query('trivia', {
            amount: 5,
            difficulty,
            category
        }).then(function (results) {
            return results.toArray();
        });
        this.gameService.start(quiz);
        return quiz;
    }

    deactivate() {
        this.gameService.stop();
    }
}
