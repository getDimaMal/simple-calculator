import { CalculatorView } from '../views/calculator.view';
import { CalculatorModel, OperatorTypes } from '../models/calculator.model';

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

    { label: '⌫', type: 'function' },
    { label: '0', type: 'value' },
    { label: '.', type: 'value' },
    { label: '=', type: 'function' },
] as ConstructorParameters<typeof CalculatorView>[0]['keys'];

export class CalculatorController {
    private model: CalculatorModel;
    private view: CalculatorView;

    constructor() {
        this.model = new CalculatorModel();
        this.view = new CalculatorView({
            keys,
            handlers: {
                value: this.handleValue,
                operator: this.handleOperator,
                function: this.handleFunction,
            },
        });
    }

    private displayUpdate = (value: string | number) => {
        this.view.displayUpdate(String(value || 0));
    };

    private handleValue = (value: string) => {
        const result = this.model.appendChar(value);
        this.displayUpdate(result);
    };

    private handleOperator = (value: OperatorTypes) => {
        this.model.handleOperator(value);
    };

    private handleFunction = (value: string) => {
        const actions: Record<string, () => string | number> = {
            '=': this.model.calculate,
            '+/-': this.model.toggleSign,
            '%': this.model.getPercentage,
            '⌫': this.model.deleteLastChar,
            'C': this.model.reset,
        };

        if (value in actions) {
            const result = actions[value]();
            this.displayUpdate(result);
        }
    };

    render() {
        return this.view.render();
    }
}