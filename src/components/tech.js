import Component from '../core/component.js';

export default class Tech extends Component {
  _template() {
    return `
      <div>
        <img src='' alt="" />
        <div>
          <h2>프론트엔드..</h2>
          <p>설명</p>
          <time datetime={2022-03-05}>2022. 03. 05</time>
        </div>
      </div>`;
  }
}
