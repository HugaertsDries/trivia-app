import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class QuizController extends Controller {
    @tracked difficulty = "";
    @tracked category = "";

    @action updateDifficulty(event) {
        this.difficulty = event.target.value;
    }

    @action updateCategory(event) {
        this.category = event.target.value;
    }
}
