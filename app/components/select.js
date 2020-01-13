import Component from '@glimmer/component';

export default class SelectComponent extends Component {
    values = [];

    change(event) {
        return event.target.value;
    }
}
