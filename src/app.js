import Component from './core/component.js';
import TechBlogPage from './pages/tech-blog-page.js';

export default class App extends Component {
  _template() {
    return '<main data-component="app">test</main>';
  }

  _componentDidMount() {
    this.$target = this._template();
    const $app = this.$target.querySelector('[data-component="app"]');
    console.log($app, 'test');
  }
}
