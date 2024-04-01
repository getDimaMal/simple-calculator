import './display.scss';

interface DisplayProps {
    value: string;
}

export class Display {
    private readonly display: HTMLDivElement;

    constructor(private props: DisplayProps) {
        const { value } = this.props;

        this.display = document.createElement('div');
        this.display.classList.add('display');
        this.display.innerText = value;
    }

    update(value: string) {
        this.display.innerText = value;
    }

    render() {
        return this.display;
    }
}