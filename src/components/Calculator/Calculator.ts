import Display from '../Display';
import Keypad from '../Keypad';
import './calculator.scss';

interface CalculatorProps {
    Display: Display;
    Keypad: Keypad;
}

export class Calculator {
    private readonly calculator: HTMLDivElement;

    constructor(private props: CalculatorProps) {
        const { Display, Keypad } = this.props;

        this.calculator = document.createElement('div');
        this.calculator.classList.add('calculator');
        this.calculator.append(Display.render());
        this.calculator.append(Keypad.render());
    }

    render = () => {
        return this.calculator;
    };
}