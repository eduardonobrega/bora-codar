const lines = document.querySelectorAll('tr:not(tr:first-of-type)');
const res = document.querySelector('aside > div');

lines.forEach((line) => {
  line.addEventListener('click', () => {
    const buttonClass = line.querySelector('th').textContent.toLowerCase();
    const buttons = line.querySelectorAll('button');

    res.innerHTML = ''
    buttons.forEach(button => {
      const newButton = document.createElement('button')
      newButton.innerHTML = button.innerHTML
      const classes = button.classList.toString()
      newButton.classList = classes
      newButton.classList.add(buttonClass)
      
      res.append(newButton)
    })
  });
});


