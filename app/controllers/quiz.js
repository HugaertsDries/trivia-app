import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class QuizController extends Controller {
    @service('quiz-game') service;

    @tracked difficulty = "";
    @tracked category = "";

    @action updateDifficulty(event) {
        this.difficulty = event.target.value;
    }

    @action updateCategory(event) {
        this.category = event.target.value;
    }
}
