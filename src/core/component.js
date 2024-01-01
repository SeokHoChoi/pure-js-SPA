/**
 * 구현에 필요한 코어 interface
 */
export default class Component {
  #$target;

  constructor($target) {
    this.#$target = $target;
    this._$state;

    this._setupInitialState();
    this._render();
  }

  /**
   * 상속한 class에서 UI 구성시 호출합니다.
   * @returns {string} HTML과 JavaScript를 템플릿 리터럴로 감싼 문자열입니다.
   * @description _render(), _$target setter 메서드의 _$target.innerHTML을 통해 렌더링 됩니다.
   */
  _template() {
    return '';
  }

  /**
   * 컴포넌트가 마운트 및 상태 업데이트가 되었을 때 호출됩니다.
   * @description _render 메서드 이후에 추가적인 기능을 수행하기 위한 메서드입니다.
   */
  _componentDidUpdate() {}

  get _$target() {
    return this.#$target;
  }

  /**
   * @param {string} _template - HTML과 JavaScript를 템플릿 리터럴로 감싼 문자열입니다.
   */
  set _$target(_template) {
    this._$target.innerHTML = _template;
  }

  /**
   * UI를 렌더링합니다.
   * @description
   * 초기 마운트 시나 상태 변경 시 _template 메서드로 구성된 UI를 _componentDidUpdate 메서드를 호출하여 렌더링 합니다.
   * _componentDidUpdate 메서드 에서의 this._$target = this._template() 실행 코드의 중복을 제거해 줍니다.
   */
  _render() {
    console.log(this._$target, '음..');

    this._$target = this._template();
    this._componentDidUpdate();
  }

  /**
   * 컴포넌트 에서의 초기 state 설정입니다.
   */
  _setupInitialState() {}
}
