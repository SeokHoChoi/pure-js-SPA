/**
 * 구현에 필요한 코어 interface
 */
export default class Component {
  constructor($target, $props) {
    /** 그리게될 컴포넌트를 받습니다. */
    this._$target = $target;
    /** 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨줄때 사용됩니다. */
    this._$props = $props;
    this._$state;
    // interface 역할을 해주기 위해 비어있는 메서드를 만들었습니다.
    this._setupInitialState();
    this._setEvent();
    this._render();
  }

  /**
   * 컴포넌트 에서의 초기 state 설정입니다.
   */
  _setupInitialState() {}

  /**
   * 컴포넌트가 마운트 되었을 때 호출됩니다.
   * @description
   * render 이후에 추가적인 기능을 수행하기 위한 메서드입니다.
   */
  _componentDidMount() {}

  /** 상속한 class에서 UI 구성시 호출합니다.
   * @returns 템플릿 리터럴로 감싸진 HTML과 javascript 문법을 리턴합니다.
   * @description - _render() 메서드의 target.innerHTML를 이용해 렌더링 됩니다.
   */
  _template() {
    return '';
  }

  /** UI를 렌더링합니다.
   * @description
   * 초기 마운트 시나 _$state 변경 시 _template() 메서드로 구성된 UI를 _componentDidMount() 메서드를 호출하여 렌더링 합니다.
   */
  _render() {
    this._$target.innerHTML = this._template();
    this._componentDidMount();
  }

  /**
   * 각 컴포넌트에서 필요한 상세 이벤트를 설계합니다.
   * @description - 설계된 이벤트 생성은 _addEvent() 메서드를 통해 이루어집니다.
   */
  _setEvent() {}

  /** 상태 변경함수 입니다.
   * @param {*} newState - 기존의 상태를 새로운 상태로 변경할 상태가 들어옵니다.
   * @description 상태를 변경 후 _render() 메서드를 호출하여 브라우저 출력 내용을 state에 종속시킵니다.
   */
  _setState(newState) {
    this._$state = { ...this._$state, ...newState };
    this._render();
  }

  /** 이벤트 등록을 추상화합니다.
   * @param {*} eventType - 'click' 등의 타입을 정하는 인자를 받습니다.
   * @param {*} selector - 어떤 요소를 선택할지에 대한 인자를 받습니다.
   * @param {*} callback - 각 컴포넌트에서 어떤 동작을 수행할지에 대한 콜백 함수를 인자로 받습니다.
   */
  _addEvent(eventType, selector, callback) {
    this._$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}
