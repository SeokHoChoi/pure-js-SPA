import Component from './core/component.js';
import TechBlogPage from './pages/tech-blog-page.js';

export default class App extends Component {
  _template() {
    return `
      <main data-component="tech-blog-app"></main>
    `;
  }

  _componentDidMount() {
    const $techBlogApp = this._$target.querySelector(
      '[data-component="tech-blog-app"]'
    );
    new TechBlogPage($techBlogApp);
  }
}
