import { CalculatorController } from './controllers/calculator.controller';


export class App {
    private calculator: CalculatorController;

    constructor() {
        this.calculator = new CalculatorController();
    }

    render(): HTMLElement {
        const app = document.createElement('div');

        app.append(this.calculator.render());

        return app;
    }
}