import Component from './core/component.js';
import TechBlogPage from './pages/tech-blog-page.js';

export default class App extends Component {
  _template() {
    return `
      <div>
        <header>
          <h1>tech blog</h1>
        </header>
        <main data-component="app"></main>
        <footer>tech lab</footer>
      </div>
      `;
  }

  _componentDidMount() {
    this._$target = this._template();
    const $app = this._$target.querySelector('[data-component="app"]');
    new TechBlogPage($app);
  }
}
