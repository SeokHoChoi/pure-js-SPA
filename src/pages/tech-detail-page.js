import Component from '../core/component.js';

export default class TechDetailPage extends Component {
  _setupInitialState() {
    const id = 1;
    // 웹 브라우저의 현재 위치를 기준으로 리소스를 찾기에 상대 경로를 입력하면 안됩니다.
    fetch(`src/data/mockDataDetail${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        this._$state = data;
        // 상태 변경을 반영하기 위해 실행
        this._render();
      });
  }

  _template() {
    const tech = this._$state;

    return `
      <div>
        <img src=${tech.imageURL} alt="${tech.alt}" />
        <div>
          <h2>${tech.title}</h2>
          <p>${tech.desc}</p>
          <time datetime=${tech.date}>${tech.date.replace(/-/g, '. ')}</time>
        </div>
      </div>
    `;
  }
}
