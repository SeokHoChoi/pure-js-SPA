import Header from './components/header.js';
import Component from './core/component.js';
import createPages from './pages/index.js';
import Router from './routes/router.js';

export default class App extends Component<HTMLDivElement> {
  _template() {
    return `
      <div>
        <header data-component="header"></header>
        <main data-component="app"></main>
        <footer>tech lab</footer>
      </div>
      `;
  }

  _componentDidUpdate() {
    const $header = this._$target.querySelector('[data-component="header"]');
    if ($header instanceof HTMLHeadElement) {
      new Header($header);
    } 

    const $app = this._$target.querySelector('[data-component="app"]');
    const pages = createPages($app);

    // <main> 태그는 별도의 인터페이스가 없어서 HTMLElement를 따릅니다.
    // 태그의 타입이 인터페이스로 명확하게 정의되지 않았다면 해당 태그는 기본적으로 HTMLElement로 간주됩니다.
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
