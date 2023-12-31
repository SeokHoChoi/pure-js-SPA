import Component from '../core/component.js';
import TechDetailPage from './tech-detail-page.js';

export default class TechBlogPage extends Component {
  _template() {
    return `
        <div data-component="tech-blog-page">
          TechBlogPage
        </div>
      `;
  }

  _componentDidUpdate() {
    const $techBlogPage = this._$target.querySelector(
      '[data-component="tech-blog-page"]'
    );
    new TechDetailPage($techBlogPage);
  }
}
