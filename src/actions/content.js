function toggleNightDayMode(e) {
  console.log(e.target.checked);
  const html = document.querySelector('html');

  // get current value of darkMode variable in localSotrage
  const darkMode = e.target.checked;

  // toggle between dark and light mode
  if (darkMode) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  // update localStorage value
  localStorage.setItem('darkMode', darkMode);
}

export { toggleNightDayMode };
