type KeyTypes = 'value' | 'operator' | 'function';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

interface KeypadProps {
    keys: { label: string, type: KeyTypes }[];
    handlers: Record<KeyTypes, (value: string) => void>;
    Button: new (props: ButtonProps) => { render: () => HTMLButtonElement };
}

export class Keypad {
    private readonly keypad: HTMLDivElement;

    constructor(private props: KeypadProps) {
        this.keypad = document.createElement('div');
        this.renderButtons();
    }

    private renderButtons() {
        const { keys, handlers, Button } = this.props;

        for (const { label, type } of keys) {
            const button = new Button({ label, onClick: () => handlers[type](label) });
            this.keypad.append(button.render());
        }
    }


    render() {
        return this.keypad;
    }
}