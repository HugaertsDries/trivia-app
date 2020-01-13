import Route from '@ember/routing/route';

export default class QuizPlayingRoute extends Route {
    async model(queryParams) {
        return await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${queryParams.difficulty}&category=${queryParams.category}`)
            .then(async function (response) {
                return await response.json();
            });
    }
}
