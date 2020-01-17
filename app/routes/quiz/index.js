import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizIndexRoute extends Route {
  @service('quiz-game') game;

  activate() {
    this.game.reset();
  }
}
