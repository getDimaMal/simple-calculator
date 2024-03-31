import Keypad from '../components/Keypad';
import Button from '../components/Button';

const keys = [
    { label: 'C', type: 'function' },
    { label: '+/-', type: 'function' },
    { label: '%', type: 'function' },
    { label: '/', type: 'operator' },

    { label: '1', type: 'value' },
    { label: '2', type: 'value' },
    { label: '3', type: 'value' },
    { label: '*', type: 'operator' },

    { label: '4', type: 'value' },
    { label: '5', type: 'value' },
    { label: '6', type: 'value' },
    { label: '-', type: 'operator' },

    { label: '7', type: 'value' },
    { label: '8', type: 'value' },
    { label: '9', type: 'value' },
    { label: '+', type: 'operator' },

    { label: 'Del', type: 'function' },
    { label: '0', type: 'value' },
    { label: '.', type: 'value' },
    { label: '=', type: 'operator' },
] as ConstructorParameters<typeof Keypad>[0]['keys'];

export class App {

    render(): HTMLElement {
        const app = document.createElement('div');

        const handlers = {
            value: (value: string) => console.log('value', value),
            operator: (value: string) => console.log('operator', value),
            function: (value: string) => console.log('function', value),
        };
        const keypad = new Keypad({ keys, handlers, Button });

        app.append(keypad.render());

        return app;
    }
}