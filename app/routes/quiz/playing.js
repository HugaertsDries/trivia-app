import Route from '@ember/routing/route';

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
        debugger
        return quiz;
    }

    deactivate() {
        this.gameService.stop();
    }
}
