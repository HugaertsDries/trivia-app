import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizRoute extends Route {
  @service('quiz-game') game;

  didTransition() {
    this.game.reset();
  }

  async model() {
    let difficulties = await this.store.peekAll('difficulty');
    let categories = await this.store.findAll('category');
    return { categories, difficulties };
  }
}
