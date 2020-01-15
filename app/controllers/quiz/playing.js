import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class PlayingController extends Controller {
    queryParams = [{ difficulty: { refreshModel: true } }, { category: { refreshModel: true } }];

    @tracked results = [];


    @computed('results')
    get progress() {
        return `width: ${this.results.length * 10}%`;
    }

    answer(trivia, content) {
        // TODO Remove
        alert(trivia.question + " -- " + content);
        //  this.results[index] = content;
    }
}
