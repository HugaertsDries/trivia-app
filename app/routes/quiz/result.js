import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizResultRoute extends Route {
    @service('quiz-game') service;

    model() {
        const quiz = this.service.quiz;
        const score = this.service.getScore();

        return { quiz, score }
    }

    activate() {
        if (this.service.quiz.length == 0) {
            this.transitionTo("quiz");
        }
    }
}
