import Route from '@ember/routing/route';

export default class TriviaRoute extends Route {
    model() {
        return [
            {
                category: "Entertainment: Video Games",
                type: "multiple",
                difficulty: "medium",
                question: "In &quot;Call of Duty: Black Ops III&quot; Zombies," +
                    "what does completing all the main easter eggs reward you with?",
                correctAnswer: "1,000,000 XP",
                incorrectAnswers: [
                    "Juggernog at the start of each game",
                    "50 Liquid Diviniums",
                    "All three options."
                ]
            },
            {
                category: "Science & Nature",
                type: "multiple",
                difficulty: "medium",
                question: "The medical condition osteoporosis affects which part of the body?",
                correctAnswer: "Bones",
                incorrectAnswers: [
                    "Skin",
                    "Brain",
                    "Heart"
                ]
            },
            {
                category: "Entertainment: Video Games",
                type: "boolean",
                difficulty: "easy",
                question: "The 2011 movie &quot;The Adventures of Tintin&quot;" +
                    "was directed by Steven Spielberg.",
                correctAnswer: "True",
                incorrectAnswers: [
                    "False"
                ]
            }
        ]
    }
}
