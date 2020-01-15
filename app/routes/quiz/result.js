import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizResultRoute extends Route {
    @service('quiz-game') service;

    model() {
        return this.service.quiz;
    }

    activate() {
        if (this.service.quiz.length == 0) {
            this.transitionTo("quiz");
        }
    }
}
