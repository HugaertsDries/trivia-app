import Service from '@ember/service';

import { tracked } from '@glimmer/tracking';

export default class QuizGameService extends Service {
    quiz = [];

    @tracked inProgress = false;

    // TODO Compute progress

    isCompleted() {
        return (this.allQuestionsAnswered && !this.inProgress)
    }

    allQuestionsAnswered() {
        return this.quiz.every(trivia => {
            return trivia.user_answer;
        })
    }

    start(quiz) {
        this.inProgress = true
        this.quiz = quiz;
    }

    answer(trivia, answer) {
        alert(trivia.question + " -- " + answer);
        trivia.user_answer = answer;
    }

    stop() {
        this.inProgress = false;
    }

}
