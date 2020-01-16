import Service from '@ember/service';
import fetch from 'fetch';

export default class TriviaFetchService extends Service {

    static URL = "https://opentdb.com/"
    static AMOUNT = 10;
    static TYPE = "";

    // async getTrivia(difficulty, category) {
    //     this.getTrivia(difficulty, category, this.TYPE);
    // }

    // async getTrivia(difficulty, category, type) {
    //     this.getTrivia(difficulty, category, type, this.AMOUNT);
    // }

    async getTrivia(difficulty, category, type, amount) {
        let response = await fetch(`https://opentdb.com/api.php?&difficulty=${difficulty}&category=${category}&amount=${amount}&type=${type}`)
            .then(async function (response) {
                return await response.json();
            });
        return response.results;
    }

    async getCategories() {
        let response = await fetch('https://opentdb.com/api_category.php')
            .then(async function (response) {
                return await response.json();
            });

        return response.trivia_categories.map(category => {
            return {
                id: category.id,
                content: category.name
            };
        });
    }

    async getDifficulties() {
        return [
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
    }
}
