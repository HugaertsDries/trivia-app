import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizResultRoute extends Route {
  @service('quiz-game') game;

  model() {
    return this.game;
  }

  activate() {
    if (this.game.questions.length == 0) {
      this.transitionTo("quiz");
    }
  }
}
