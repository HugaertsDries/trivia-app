import Component from '@ember/component';
import { shuffle } from 'trivia-app/helpers/shuffle';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class TriviaQuestionComponent extends Component {

    @tracked userAnswer = '';

    @computed('userAnswer')
    get isCorrect() {
        return this.userAnswer == this.trivia.correct_answer;
    }

    @computed
    get answers() {
        let { incorrect_answers, correct_answer } = this.trivia
        let answers = incorrect_answers;
        answers.push(correct_answer);
        shuffle(answers);
        return answers.map((answer) => {
            return {
                id: answer,
                content: answer
            }
        });
    }

    @computed
    get diffColor() {
        let { difficulty } = this.trivia;

        switch (difficulty) {
            case "easy":
                return "badge green white-text";
            case "medium":
                return "badge orange white-text";
            case "hard":
                return "badge red white-text";
            default:
                return "badge yellow black-text";
        }
    }

    @action onChange(event) {
        this.userAnswer = event.target.value;
    }


}
