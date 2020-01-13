import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PlayingController extends Controller {
    queryParams = ['difficulty', 'category'];
    @tracked difficulty = '';
    @tracked category = '';
}
