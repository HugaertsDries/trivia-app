import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PlayingController extends Controller {
    queryParams = [{ difficulty: { refreshModel: true } }, { category: { refreshModel: true } }];

    @tracked difficulty = "";
    @tracked category = "";

    @service('quiz-game') quiz;
    @service('trivia-fetch') triviaService;

    @action
    answer(trivia, answer) {
        this.quiz.answer(trivia, answer);
        if (this.quiz.isCompleted()) {
            console.log('--- quiz was completed ---');
            this.transitionToRoute('quiz.result');
        }
    }
}
