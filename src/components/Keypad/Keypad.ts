import Button from "../Button";

type KeyTypes = 'value' | 'operator' | 'function';

interface KeypadProps {
    keys: { label: string, type: KeyTypes }[];
    handlers: Record<KeyTypes, (value: string) => void>;
    Button: typeof Button
}

export class Keypad {
    private readonly keypad: HTMLDivElement;

    constructor(private props: KeypadProps) {
        this.keypad = document.createElement('div');
    }

    private renderButtons() {
        const { keys, handlers, Button } = this.props;

        for (const { label, type } of keys) {
            const button = new Button({ label, onClick: () => handlers[type](label) });
            this.keypad.append(button.render());
        }
    }

    render() {
        this.renderButtons();
        return this.keypad;
    }
}