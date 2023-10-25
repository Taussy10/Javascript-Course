

const btn = document.querySelector('#btn');
const container = document.querySelector('#container');
const a = 'HEll'
btn.addEventListener('click', function () {
  if (btn.innerHTML === 'Click me') {
    btn.innerHTML = 'Updated';
    container.innerHTML = 'Hello Updated';
  } else if(container.innerHTML === 'Hello Updated' ) {
    btn.innerHTML = 'Click me';
    debugger;
    container.innerHTML = ' '
    
  }
});



