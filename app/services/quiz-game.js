import Service from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class QuizGameService extends Service {

  @tracked
  questions = [];

  get inProgress() {
    return this.questions.length != 0 && this.progress != 100;
  }

  /**
   * returns the progress of the quiz in percentage
   */
  get progress() {
    let amountAnswered = this.questions.filter(trivia => trivia.user_answer).length;
    let totalQuestions = this.questions.length;

    return (amountAnswered / totalQuestions) * 100;
  }

  /**
   * returns if the quiz has been completed
   */
  get isCompleted() {
    return this.allQuestionsAnswered && !this.inProgress;
  }

  /**
   * return the amount of correctly answered questions by the user
   */
  get score() {
    return this.questions.filter(trivia => trivia.correct_answer == trivia.user_answer).length;
  }

  /**
   * TODO REMOVE
   * returns if all questions have been answered
   */
  get allQuestionsAnswered() {
    return this.questions.every(trivia => trivia.user_answer != undefined);
  }


  @action
  start(questions) {
    this.questions = questions;
  }

  @action
  answer(trivia, answer) {
    trivia.user_answer = answer;
  }

  @action
  reset() {
    this.questions = [];
  }

}
