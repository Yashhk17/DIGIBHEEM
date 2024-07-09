document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const measurement = document.getElementById('measurement');
    const history = document.getElementById('history');
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const buttonText = this.innerText;
  
        if (buttonText === 'C') {
          display.value = '';
        } else if (buttonText === '<-') {
          display.value = display.value.slice(0, -1);
        } else if (buttonText === '=') {
          try {
            const result = eval(display.value);
            history.value += `${display.value} = ${result}\n`;
            display.value = result;
          } catch {
            display.value = 'Error';
          }
        } else if (['sin', 'cos', 'tan', 'log'].includes(buttonText)) {
          const value = parseFloat(display.value);
          if (!isNaN(value)) {
            if (buttonText === 'sin') {
              display.value = Math.sin(value);
            } else if (buttonText === 'cos') {
              display.value = Math.cos(value);
            } else if (buttonText === 'tan') {
              display.value = Math.tan(value);
            } else if (buttonText === 'log') {
              display.value = Math.log10(value);
            }
          } else {
            display.value = 'Error';
          }
        } else {
          display.value += buttonText;
        }
      });
    });
  });
  