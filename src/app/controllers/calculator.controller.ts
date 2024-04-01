import { CalculatorView } from '../views/calculator.view';
import { CalculatorModel } from '../models/calculator.model';

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

export class CalculatorController {
    private view: CalculatorView;
    private model: CalculatorModel;

    constructor() {
        this.view = new CalculatorView({
            keys,
            handlers: {
                value: this.handleValue,
                operator: this.handleOperator,
                function: this.handleFunction,
            },
        });

        this.model = new CalculatorModel({ onChange: this.view.displayUpdate });
    }

    private handleValue = (value: string) => {
        this.model.inputPush(value);
    };

    private handleOperator(value: string) {
        console.log('operator', value);
    }

    private handleFunction = <T extends string>(value: T) => {
        const actions = {
            'C': this.model.reset,
            '⌫': this.model.inputPop,
            '+/-': this.model.inverse,
        } as Record<T, () => void>;

        if (value in actions) actions[value]();
    };

    render() {
        return this.view.render();
    }
}