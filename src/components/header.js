import Component from '../core/component.js';

export default class Header extends Component {
  _template() {
    return `
      <div>
        <h1>
          <a href="#/">tech blog</a>
        </h1>
        <nav>
          <a href="#/design">디자인</a>
          <a href="#/tech">개발</a>
        </nav>
      </div>
    `;
  }
}
