const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.card');
buttons.forEach(button => button.addEventListener('click', () => {
  const chosen = button.dataset.filter;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  cards.forEach(card => { card.hidden = chosen !== 'All' && card.dataset.category !== chosen; if (!card.hidden) visible++; });
  document.querySelector('#count').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
}));