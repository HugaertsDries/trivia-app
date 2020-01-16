import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    /**
     * on index route redirect to ->
     */
    beforeModel() {
        this.replaceWith('trivia');
    }
}
