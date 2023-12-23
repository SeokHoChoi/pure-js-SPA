/**
 * 구현에 필요한 코어 interface
 */
export default class Component {
  #$target;

  constructor($target) {
    this.#$target = $target;
    this._componentDidMount();
  }

  _template() {
    return '';
  }

  _componentDidMount() {}

  get _$target() {
    return this.#$target;
  }

  /**
   * @param {string} _template - HTML과 JavaScript를 템플릿 리터럴로 감싼 문자열입니다.
   */
  set _$target(_template) {
    this._$target.innerHTML = _template;
  }
}
