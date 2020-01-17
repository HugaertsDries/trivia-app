import Route from '@ember/routing/route';

export default class QuizRoute extends Route {

  async model() {
    let difficulties = await this.store.peekAll('difficulty');
    let categories = await this.store.findAll('category');
    return { categories, difficulties };
  }
}
