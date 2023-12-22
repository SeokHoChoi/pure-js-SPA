import Component from '../core/component.js';
import Tech from '../components/tech.js';

export default class TechBlogPage extends Component {
  _template() {
    return `
        <h1>tech Page</h1>
        <div data-component="tech"></div>
    `;
  }

  _componentDidMount() {
    const $tech = this._$target.querySelector('[data-component="tech"]');
    new Tech($tech);
  }
}
