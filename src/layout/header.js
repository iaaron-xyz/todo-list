function headerContent() {
  const titleContainer = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');

  titleContainer.setAttribute('id', 'title-container');
  titleContainer.setAttribute('class', 'p4');

  title.setAttribute('id', 'title-text');
  title.setAttribute('class', 'text-5xl');
  title.textContent = 'All.do';

  subtitle.setAttribute('id', 'subtitle-text');
  subtitle.setAttribute('class', 'text-2xl');
  subtitle.textContent = 'Organize your tasks one at a time.';

  titleContainer.appendChild(title);
  titleContainer.appendChild(subtitle);

  return titleContainer;
}

export { headerContent };
