import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PlayingController extends Controller {
    queryParams = [{ difficulty: { refreshModel: true } }, { category: { refreshModel: true } }];

    @tracked difficulty = "";
    @tracked category = "";

    @service('quiz-game') service;

    @action
    answer(trivia, answer) {
        this.service.answer(trivia, answer);
        if (this.service.isCompleted()) {
            console.log('--- quiz was completed ---');
            this.transitionToRoute('quiz.result');
        }
    }
}
