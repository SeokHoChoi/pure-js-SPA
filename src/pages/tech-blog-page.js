import Component from '../core/component.js';
import Tech from '../components/tech.js';

export default class TechBlogPage extends Component {
  _template() {
    return `
        <div data-component="tech-blog-page">
          TechBlogPage
        </div>
      `;
  }

  _componentDidMount() {
    const $techBlogPage = this._$target.querySelector(
      '[data-component="tech-blog-page"]'
    );
    new Tech($techBlogPage);
  }
}
