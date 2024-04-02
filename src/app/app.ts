import { CalculatorController } from './controllers/calculator.controller';


export class App {
    private calculator: CalculatorController;

    constructor() {
        this.calculator = new CalculatorController();
    }

    render(): HTMLElement {
        return this.calculator.render();
    }
}