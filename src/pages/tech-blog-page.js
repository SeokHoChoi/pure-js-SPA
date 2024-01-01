import { get } from '../api/getMockData.js';
import Component from '../core/component.js';

export default class TechBlogPage extends Component {
  _setupInitialState() {
    get('src/data/mockDataOfTech.json').then((data) => {
      this._$state = data;
      // 상태 변경을 반영하기 위해 실행
      this._render();
    });
  }

  _template() {
    const { techs } = this._$state;

    return `
      <div >
        ${techs
          .map((tech) => {
            return `
              <div key=${tech.id}>
                <img src=${tech.imageURL} alt="${tech.alt}" />
                <div>
                  <h2>${tech.title}</h2>
                  <p>${tech.desc}</p>
                  <time datetime=${tech.date}>${tech.date.replace(
              /-/g,
              '. '
            )}</time>
                </div>
              </div>`;
          })
          .join('')}
      </div>
    `;
  }
}
