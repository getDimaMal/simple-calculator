import { CalculatorView } from '../views/calculator.view';
import { CalculatorModel, OperatorTypes } from '../models/calculator.model';

const keys = [
    { label: 'C', type: 'function', variant: 'secondary' },
    { label: '+/-', type: 'function', variant: 'secondary' },
    { label: '%', type: 'function', variant: 'secondary' },
    { label: '/', type: 'operator', variant: 'third' },

    { label: '1', type: 'value', variant: 'primary' },
    { label: '2', type: 'value', variant: 'primary' },
    { label: '3', type: 'value', variant: 'primary' },
    { label: 'x', type: 'operator', variant: 'third' },

    { label: '4', type: 'value', variant: 'primary' },
    { label: '5', type: 'value', variant: 'primary' },
    { label: '6', type: 'value', variant: 'primary' },
    { label: '-', type: 'operator', variant: 'third' },

    { label: '7', type: 'value', variant: 'primary' },
    { label: '8', type: 'value', variant: 'primary' },
    { label: '9', type: 'value', variant: 'primary' },
    { label: '+', type: 'operator', variant: 'third' },

    { label: '⌫', type: 'function', variant: 'primary' },
    { label: '0', type: 'value', variant: 'primary' },
    { label: '.', type: 'value', variant: 'primary' },
    { label: '=', type: 'function', variant: 'third' },
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