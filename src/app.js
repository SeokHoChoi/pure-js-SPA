import Header from './components/header.js';
import Component from './core/component.js';
import TechBlogPage from './pages/tech-blog-page.js';

export default class App extends Component {
  _template() {
    return `
      <div>
        <header data-component="header"></header>
        <main data-component="app"></main>
        <footer>tech lab</footer>
      </div>
      `;
  }

  _componentDidMount() {
    const $header = this._$target.querySelector('[data-component="header"]');
    const $app = this._$target.querySelector('[data-component="app"]');
    new Header($header);
    new TechBlogPage($app);
  }
}
