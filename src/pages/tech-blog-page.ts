import { get } from '../api/mockApi.js';
import Component from '../core/component.js';
import TechDetailPage from './tech-detail-page.js';

export default class TechBlogPage extends Component<HTMLDivElement> {
  setupInitialState() {
    get('/src/data/mockDataOfTech.json', {}).then((data) => {
      this.setState(data);
    });
  }

  template() {
    const { techs } = this.state || { techs: [] };

    return ` 
      <div data-component="tech-blog-page">
        ${techs
          .map((tech: any) => {
            return `
              <a data-navigation href="/tech/${tech.id}" key=${tech.id}>
                <img src=${tech.src} alt="${tech.alt}" />
                <div>
                  <h2>${tech.title}</h2>
                  <p>${tech.desc}</p>
                  <time datetime=${tech.date}>${tech.date.replace(
              /-/g,
              '. '
            )}</time>
                </div>
              </a>`;
          })
          .join('')}
      </div>
    `;
  }
}
