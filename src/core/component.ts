/**
 * 구현에 필요한 코어 interface
 */
export default class Component<T extends HTMLElement> {
  protected state: any
  
  constructor(private _target: T) {

    this.setupInitialState();
    this.setEvent();
    this.render();
  }

  get target() {
    return this._target;
  }

  set target(target) {
    this._target = target;
  }

  /**
   * 상속한 class에서 UI 구성시 호출합니다.
   * @returns HTML과 JavaScript를 템플릿 리터럴로 감싼 문자열입니다.
   */
  protected template() {
    return '';
  }

  /**
   * 컴포넌트가 마운트 및 상태 업데이트가 되었을 때 호출됩니다.
   * @description render 메서드 이후에 추가적인 기능을 수행하기 위한 메서드입니다.
   */
  protected componentDidUpdate() {}


  /**
   * UI를 렌더링합니다.
   * @description
   * 초기 마운트 시나 상태 변경 시 template 메서드로 구성된 UI를 componentDidUpdate 메서드를 호출하여 렌더링 합니다.
   * componentDidUpdate 메서드 에서의 this.target.innerHTML = this.template() 실행 코드의 중복을 제거해 줍니다.
   */
  protected render() {
    this.target.innerHTML = this.template();
    this.componentDidUpdate();
  }

  /**
   * 컴포넌트 에서의 초기 state 설정입니다.
   */
  protected setupInitialState() {}

  /**
   * 각 컴포넌트에서 필요한 상세 이벤트를 설계합니다.
   * @description - 설계된 이벤트 생성은 addEvent() 메서드를 통해 이루어집니다.
   */
  protected setEvent() {}

  /** 상태 변경함수 입니다.
   * @param {*} newState - 기존의 상태를 새로운 상태로 변경할 상태가 들어옵니다.
   * @description 상태를 변경 후 render() 메서드를 호출하여 브라우저 출력 내용을 state에 종속시킵니다.
   */
  protected setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  /** 이벤트 등록을 추상화합니다.
   * @param {*} eventType - 'click' 등의 타입을 정하는 인자를 받습니다.
   * @param {*} selector - 어떤 요소를 선택할지에 대한 인자를 받습니다.
   * @param {*} callback - 각 컴포넌트에서 어떤 동작을 수행할지에 대한 콜백 함수를 인자로 받습니다.
   */
  protected addEvent(eventType: any, selector: any, callback: any) {
    this.target.addEventListener(eventType, (event: any) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}
