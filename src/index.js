import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = '<h1>Hello First Setup!</h1>';
  return element;
}

document.body.appendChild(component());
