function toggleNightDayMode(e) {
  console.log(e.target.checked);
  const html = document.querySelector('html');
  html.classList.toggle('dark');
}

export { toggleNightDayMode };
