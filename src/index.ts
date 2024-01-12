import App from './app.js';

// Entry Point
const rootElement = document.querySelector('#root');
if (rootElement instanceof HTMLDivElement) {
  new App(rootElement);
} else {
  console.error('Root element 404 or HTMLDivElement를 찾지 못했습니다.');
}