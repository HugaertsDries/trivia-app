import Route from '@ember/routing/route';

export default class QuizRoute extends Route {
    async model() {
        let difficulties = [
            {
                id: "",
                name: "Any Difficulty"
            },
            {
                id: "easy",
                name: "Easy"
            },
            {
                id: "medium",
                name: "Medium"
            },
            {
                id: "hard",
                name: "Hard"
            },
        ];

        let { trivia_categories: categories } = await fetch('https://opentdb.com/api_category.php')
            .then(async function (response) {
                return await response.json();
            });

        categories.unshift({
            id: "",
            name: "Any Category"
        });

        return { categories, difficulties };

    }
}
