<script lang="ts">
  import GitHub from './assets/github.svg?component';
  import fs from './assets/start.png';
  import f1 from './assets/frame1.png';
  import f2 from './assets/frame2.png';
  import f3a from './assets/frame3a.png';
  import f3b from './assets/frame3b.png';

  const frames = [
    { id: 'f-s', src: fs, hidden: true },
    { id: 'f-1', src: f1, hidden: false },
    { id: 'f-2', src: f2, hidden: true },
    { id: 'f-3a', src: f3a, hidden: true },
    { id: 'f-3b', src: f3b, hidden: true }
  ];

  // const fs = document.getElementById('f-s')!;
  // const f1 = document.getElementById('f-1')!;
  // const f2 = document.getElementById('f-2')!;
  // const f3a = document.getElementById('f-3a')!;
  // const f3b = document.getElementById('f-3b')!;

  // f1.style.display = 'none';
  // f2.style.display = 'none';
  // f3a.style.display = 'none';
  // f3b.style.display = 'none';

  // let hasStarted = false;

  // document.addEventListener('keydown', (e) => {
  //   if (hasStarted) return;
  //   if (e.code !== 'Space') return;

  //   hasStarted = true;
  //   f1.style.display = '';
  //   fs.style.display = 'none';

  //   document.addEventListener('keydown', handleChallenge);

  //   // TODO: random timer
  //   setTimeout(() => challenge(), 1000);
  // });

  // // TODO: count frames or ms after the challenge begin
  // const challenge = () => {
  //   f2.style.display = '';
  //   f1.style.display = 'none';
  // };

  // const handleChallenge = (e: KeyboardEvent) => {
  //   if (!hasStarted) return;
  //   if (e.code !== 'KeyQ' && e.code !== 'Slash') return;

  //   f2.style.display = 'none';

  //   switch (e.code) {
  //     case 'KeyQ':
  //       f3a.style.display = '';
  //       break;
  //     case 'Slash':
  //       f3b.style.display = '';
  //       break;
  //   }

  //   hasStarted = false;

  //   document.removeEventListener('keydown', handleChallenge);
  // };
</script>

<main class="relative">
  <div class="absolute font-bold text-2xl right-[95px] bottom-[240px]">000</div>

  {#each frames as frame}
    <img
      id={frame.id}
      src={frame.src}
      alt={'frame-' + frame.id}
      class="h-[800px]"
      class:hidden={frame.hidden}
    />
  {/each}
</main>

<a
  href="https://github.com/julesrx/kirby-samurai"
  target="_blank"
  rel="nofollow"
  class="fixed bottom-0 right-0 text-white opacity-10"
>
  <GitHub />
</a>
