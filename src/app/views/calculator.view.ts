import Display from '../../components/Display';
import Keypad from '../../components/Keypad';
import Button from '../../components/Button';
import Calculator from '../../components/Calculator';


interface CalculatorViewProps {
    keys: ConstructorParameters<typeof Keypad>[0]['keys'];
    handlers: ConstructorParameters<typeof Keypad>[0]['handlers'];
}

export class CalculatorView {
    private readonly display;
    private calculator;

    constructor(private props: CalculatorViewProps) {
        const { keys, handlers } = this.props;

        this.display = new Display({ value: '0' });
        this.calculator = new Calculator({ Display: this.display, Keypad: new Keypad({ keys, handlers, Button }) });
    }

    displayUpdate = (value: string) => {
        this.display.update(value);
    };

    render = () => {
        return this.calculator.render();
    };
}