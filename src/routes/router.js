import Component from '../core/component.js';

export default class Router extends Component {
  _setupInitialState() {
    this._setState({
      routes: [],
    });
  }

  /**
   * 라우트를 추가합니다.
   * @param {string} fragment - 추가할 라우트의 URL
   * @param {function} component - 해당 라우트에 대한 컴포넌트 클래스 생성자 함수
   */
  addRoute(fragment, component) {
    this._$state.routes.push({ fragment, component });
  }

  /**
   * 현재 URL의 해시값을 확인하고, 해당하는 라우트의 컴포넌트를 렌더링합니다.
   * 없는 경우 기본 라우트로 이동합니다.
   */
  checkRoutes() {
    const currentHash = window.location.hash;

    const currentRoute = this._$state.routes.find((route) => {
      // :id 처리를 위한 정규식
      // :[^\s/]+ 콜론으로 시작하는 동적인 부분을
      // ([^/]+) 슬래시가 아닌 문자로 이루어진 동적인 부분을 나타냅니다.
      const routePattern = new RegExp(
        `^${route.fragment.replace(/:[^\s/]+/g, '([^/]+)')}$`
      );
      return currentHash.match(routePattern);
    });

    if (!currentRoute) {
      // 라우트가 없는 경우 기본 라우트로 이동
      window.location.href = '/#';
      this._$state.routes[0].component();
      return;
    }

    // 현재 라우트에 해당하는 컴포넌트 렌더링
    currentRoute.component();
  }

  /**
   * 페이지 로딩 시 초기 라우팅을 수행하고,
   * hashchange 이벤트에 대한 리스너를 등록합니다.
   */
  start() {
    window.addEventListener('hashchange', () => this.checkRoutes());

    if (!window.location.hash) {
      // 초기 해시값이 없는 경우 기본 라우트로 이동
      window.location.hash = '#/';
    }

    // 초기 라우팅 체크
    this.checkRoutes();
  }
}
