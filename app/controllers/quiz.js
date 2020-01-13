import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class QuizController extends Controller {
    difficulty = "";
    category = "";

    @action updateDifficulty(event) {
        this.difficulty = event.target.value;
    }


    @action updateCategory(event) {
        this.category = event.target.value;
    }

    @action startQuiz() {
        alert(`a quiz should be started with difficulty ${this.difficulty} and category ${this.category}`);
    }
}
