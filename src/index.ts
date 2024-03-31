import './styles/main.scss';
import { App } from './app/app';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    const root = document.getElementById('root');
    root.append(app.render());
});