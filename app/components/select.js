import Component from '@glimmer/component';

export default class SelectComponent extends Component {
    placeholder = null;
    values = [];

    change(event) {
        return event.target.value;
    }
}
