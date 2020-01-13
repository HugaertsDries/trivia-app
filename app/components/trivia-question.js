import Ember from 'ember';
import { shuffle } from 'trivia-app/helpers/shuffle';
import { computed } from '@ember/object';

export default class TriviaQuestionComponent extends Ember.Component {

    // @tracked trivia = {
    //     correct_answer: "correct",
    //     incorrect_answers: [
    //         "incorrect"
    //     ]
    // }

    @computed
    get answers() {
        let { incorrect_answers, correct_answer } = this.trivia
        let answers = incorrect_answers;
        answers.push(correct_answer);
        shuffle(answers);
        return answers.map((answer, index) => {
            return {
                id: index,
                content: answer
            }
        });
    }
}
