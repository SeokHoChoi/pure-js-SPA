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
   * @param {HTMLElement} $target
   */
  set _$target(_template) {
    this._$target.innerHTML = _template;
  }
}
