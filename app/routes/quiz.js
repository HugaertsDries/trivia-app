import Route from '@ember/routing/route';

export default class QuizRoute extends Route {
    async model() {
        return await fetch('https://opentdb.com/api_category.php')
            .then(async function (response) {
                return await response.json();
            });
    }
}
