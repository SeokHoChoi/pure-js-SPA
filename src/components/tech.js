import Component from '../core/component.js';

export default class Tech extends Component {
  _setupInitialState() {
    this._$state = {
      techs: [
        {
          id: 1,
          title: '프론트엔드 로깅 신경 안 쓰기',
          imageURL: 'http://',
          alt: '',
          desc: '프론트엔드 개발자라면 한 번쯤 고민해봤을 클라이언트 로깅 개선 과정을 공유합니다.',
          date: '2023-12-20',
        },
        {
          id: 2,
          title: 'useState에 대해',
          imageURL: 'http://',
          alt: '해당 이미지는 스크린 리더가 읽어야 합니다. 읽지 않을시 alt는 빈 문자열로 표시',
          desc: 'useState는 튜플 타입으로..',
          date: '2023-12-10',
        },
        {
          id: 3,
          title: '테스트 코드..',
          imageURL: 'http://',
          alt: '해당이미지의alt는띄어쓰기를하지않았습니다.',
          desc: 'TDD, e2e...',
          date: '2023-11-20',
        },
        {
          id: 4,
          title: 'React 파이버..',
          imageURL: '',
          alt: '',
          desc: '파이버..',
          date: '2022-11-10',
        },
      ],
    };
  }

  _template() {
    const { techs } = this._$state;

    return `
      <div>
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
