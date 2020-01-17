import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuizPlayingRoute extends Route {
  @service('quiz-game') game;

  async model(queryParams) {
    let { difficulty, category } = queryParams;
    let questions = await this.store.query('trivia', {
      amount: 5,
      difficulty,
      category
    }).then(function (results) {
      return results.toArray();
    });
    this.game.start(questions);
    return questions;
  }
}
