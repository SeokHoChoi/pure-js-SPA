import Header from './components/header.js';
import Component from './core/component.js';
import createPages from './pages/index.js';
import Router from './routes/router.js';

export default class App extends Component<HTMLDivElement> {
  template() {
    return `
      <div>
        <header data-component="header"></header>
        <main data-component="app"></main>
        <footer>tech lab</footer>
      </div>
      `;
  }

  componentDidUpdate() {
    const $header = this.target.querySelector('[data-component="header"]');
    if ($header instanceof HTMLElement) {
      new Header($header);
    } 

    const $app = this.target.querySelector('[data-component="app"]');
    const pages = createPages($app);

    if ($app instanceof HTMLElement) {
      const router = new Router($app);
      router
        .addRoute('/', pages.home)
        .addRoute('/tech', pages.tech)
        .addRoute('/tech/:id', pages.detail)
        .start();
    }
  }
}
