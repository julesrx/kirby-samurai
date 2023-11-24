import './main.scss';

// TODO: svelte

const fs = document.getElementById('f-s')!;
const f1 = document.getElementById('f-1')!;
const f2 = document.getElementById('f-2')!;
const f3a = document.getElementById('f-3a')!;
const f3b = document.getElementById('f-3b')!;

f1.style.display = 'none';
f2.style.display = 'none';
f3a.style.display = 'none';
f3b.style.display = 'none';

let hasStarted = false;

document.addEventListener('keydown', (e) => {
  if (hasStarted) return;
  if (e.code !== 'Space') return;

  hasStarted = true;
  f1.style.display = '';
  fs.style.display = 'none';

  document.addEventListener('keydown', handleChallenge);

  // TODO: random timer
  setTimeout(() => challenge(), 1000);
});

// TODO: count frames or ms after the challenge begin
const challenge = () => {
  f2.style.display = '';
  f1.style.display = 'none';
};

const handleChallenge = (e: KeyboardEvent) => {
  if (!hasStarted) return;
  if (e.code !== 'KeyQ' && e.code !== 'Slash') return;

  f2.style.display = 'none';

  switch (e.code) {
    case 'KeyQ':
      f3a.style.display = '';
      break;
    case 'Slash':
      f3b.style.display = '';
      break;
  }

  hasStarted = false;

  document.removeEventListener('keydown', handleChallenge);
};
