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

    answer(index, content) {
        // TODO Remove
        alert(content);
        this.results[index] = content;
    }
}
