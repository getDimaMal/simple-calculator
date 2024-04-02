export type OperatorTypes = '+' | '-' | 'x' | '/'


export class CalculatorModel {
    private currentResult = 0;
    private currentInput = '';
    private currantOperator: OperatorTypes | null = null;

    calculate = () => {
        const actions: Record<OperatorTypes, (a: number, b: number) => number> = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            'x': (a, b) => a * b,
            '/': (a, b) => a / b,
        };

        this.currentResult = actions[this.currantOperator](this.currentResult, parseFloat(this.currentInput));
        this.currantOperator = null;
        this.currentInput = '';

        return this.currentResult;
    };

    handleOperator = (operator: OperatorTypes) => {
        if (this.currentInput) {
            this.currentResult = this.currantOperator ? this.calculate() : parseFloat(this.currentInput);
        }

        this.currantOperator = operator;
        this.currentInput = '';

        return this.currentResult;
    };

    getPercentage = () => {
        const result = (this.currentResult || 1) * parseFloat(this.currentInput) / 100;
        this.currentInput = String(result);

        return result;
    };

    appendChar = (input: string) => {
        if (input === '.') {
            this.currentInput += this.currentInput.includes('.') ? '' : '.';
        } else {
            this.currentInput = String(parseFloat(this.currentInput + input));
        }

        return this.currentInput;
    };

    deleteLastChar = () => {
        this.currentInput = this.currentInput.slice(0, -1);
        return this.currentInput;
    };

    toggleSign = () => {
        if (!this.currentInput) return;

        this.currentInput = String(parseFloat(this.currentInput) * -1);
        return this.currentInput;
    };

    reset = () => {
        this.currentInput = '';
        this.currantOperator = null;
        return this.currentInput;
    };
}