import Service from '@ember/service';

import { tracked } from '@glimmer/tracking';

export default class QuizGameService extends Service {
    quiz = [];

    @tracked inProgress = false;

    // TODO Compute progress

    isCompleted() {
        let isComplete = this.allQuestionsAnswered()
        return isComplete;
    }

    allQuestionsAnswered() {
        return this.quiz.every(trivia => trivia.user_answer);
    }

    start(quiz) {
        this.inProgress = true
        this.quiz = quiz;
    }

    answer(trivia, answer) {
        trivia.user_answer = answer;
    }

    stop() {
        this.inProgress = false;
    }

}
