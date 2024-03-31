import Button from '../components/Button';

export class App {

    render(): HTMLElement {
        const app = document.createElement('div');
        const button = new Button({ label: 'Click Me!', onClick: () => console.log('Hello, World!') });

        app.append(button.render());

        return app;
    }
}