import './butoon.scss';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export class Button {
    private readonly button: HTMLButtonElement;

    constructor(private props: ButtonProps) {
        const { label, onClick } = this.props;

        this.button = document.createElement('button');
        this.button.innerText = label;
        this.button.classList.add('btn');
        this.button.addEventListener('click', onClick);
    }

    render() {
        return this.button;
    }
}