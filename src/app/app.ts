import { CalculatorView } from './views/calculator.view';

const keys = [
    { label: 'C', type: 'function' },
    { label: '+/-', type: 'function' },
    { label: '%', type: 'function' },
    { label: '/', type: 'operator' },

    { label: '1', type: 'value' },
    { label: '2', type: 'value' },
    { label: '3', type: 'value' },
    { label: 'x', type: 'operator' },

    { label: '4', type: 'value' },
    { label: '5', type: 'value' },
    { label: '6', type: 'value' },
    { label: '-', type: 'operator' },

    { label: '7', type: 'value' },
    { label: '8', type: 'value' },
    { label: '9', type: 'value' },
    { label: '+', type: 'operator' },

    { label: '⌫', type: 'function' },
    { label: '0', type: 'value' },
    { label: '.', type: 'value' },
    { label: '=', type: 'operator' },
] as ConstructorParameters<typeof CalculatorView>[0]['keys'];

export class App {
    private view: CalculatorView;

    constructor() {
        this.view = new CalculatorView({
            keys,
            displayValue: '0',
            handlers: {
                value: this.handleValue.bind(this),
                operator: this.handleOperator.bind(this),
                function: this.handleFunction.bind(this),
            },
        });
    }

    private handleValue(value: string) {
        this.view.displayUpdate(value);
        console.log('value', value);
    }

    private handleOperator(value: string) {
        console.log('operator', value);
    }

    private handleFunction(value: string) {
        console.log('function', value);
    }

    render(): HTMLElement {
        const app = document.createElement('div');

        app.append(this.view.render());

        return app;
    }
}