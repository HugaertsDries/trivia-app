import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    model() {
        this.store.push({
            data: [
                {
                    id: "easy",
                    type: 'difficulty',
                    attributes: {
                        content: "Easy"
                    }
                },
                {
                    id: "medium",
                    type: 'difficulty',
                    attributes: {
                        content: "Medium"
                    }
                },
                {
                    id: "hard",
                    type: 'difficulty',
                    attributes: {
                        content: "Hard"
                    }
                }
            ]
        });
    }
}
