import Route from '@ember/routing/route';

export default class QuizRoute extends Route {
    async model() {
        let difficulties = [
            {
                id: "easy",
                content: "Easy"
            },
            {
                id: "medium",
                content: "Medium"
            },
            {
                id: "hard",
                content: "Hard"
            },
        ];

        let { trivia_categories: categories } = await fetch('https://opentdb.com/api_category.php')
            .then(async function (response) {
                return await response.json();
            });

        categories = categories.map(category => {
            return {
                id: category.id,
                content: category.name
            }
        });

        return { categories, difficulties };

    }
}
