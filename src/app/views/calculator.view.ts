import Display from '../../components/Display';
import Keypad from '../../components/Keypad';
import Button from '../../components/Button';


interface CalculatorViewProps {
    keys: ConstructorParameters<typeof Keypad>[0]['keys'];
    handlers: ConstructorParameters<typeof Keypad>[0]['handlers'];
}

export class CalculatorView {
    private display;
    private keypad;

    constructor(private props: CalculatorViewProps) {
        const {  keys, handlers } = this.props;

        this.display = new Display({ value: '0' });
        this.keypad = new Keypad({ keys, handlers, Button });
    }

    displayUpdate = (value: string) => {
        this.display.update(value);
    };

    render = () => {
        const container = document.createElement('div');
        container.append(this.display.render());
        container.append(this.keypad.render());

        return container;
    };
}