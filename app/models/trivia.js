import Model, { attr } from '@ember-data/model';

export default class TriviaModel extends Model {
    @attr category;
    @attr type;
    @attr difficulty;
    @attr question;
    @attr correct_answer;
    @attr incorrect_answers;
}
