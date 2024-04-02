import './butoon.scss';

type ButtonVariants = 'primary' | 'secondary' | 'third'

interface ButtonProps {
    label: string;
    onClick: () => void;

    variant?: ButtonVariants;
}

export class Button {
    private readonly button: HTMLButtonElement;

    constructor(private props: ButtonProps) {
        const { label, onClick, variant = 'primary' } = this.props;

        this.button = document.createElement('button');
        this.button.innerText = label;
        this.button.classList.add('btn', variant);
        this.button.addEventListener('click', onClick);
    }

    render() {
        return this.button;
    }
}