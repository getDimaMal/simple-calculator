type OperatorTypes = '/' | '*' | '-' | '+'

interface CalculatorModelProps {
    onChange: (value: string) => void;
}

export class CalculatorModel {
    private result = 0;
    private input = '';
    private operator: OperatorTypes | null = null;

    constructor(private props: CalculatorModelProps) {}

    inputPush = (input: string) => {
        if (input === '.' && this.input.includes('.')) return;

        this.input += input;
        this.props.onChange(this.input);
    };

    inputPop = () => {
        this.input = this.input.slice(0, -1);
        this.props.onChange(this.input || '0');
    };

    reset = () => {
        this.input = '';
        this.operator = null;
        this.props.onChange('0');
    };

    inverse = () => {
        if (!this.input) return;

        this.input = String(parseFloat(this.input) * -1);
        this.props.onChange(this.input);
    };
}