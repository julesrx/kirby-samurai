<script lang="ts">
  import fs from './assets/start.png';
  import f1 from './assets/frame1.png';
  import f2 from './assets/frame2.png';
  import f3a from './assets/frame3a.png';
  import f3b from './assets/frame3b.png';

  const frames = [
    { id: 'f-s', src: fs, hidden: false },
    { id: 'f-1', src: f1, hidden: true },
    { id: 'f-2', src: f2, hidden: true },
    { id: 'f-3a', src: f3a, hidden: true },
    { id: 'f-3b', src: f3b, hidden: true }
  ];
</script>

<main>
  <div id="app" class="h-screen flex justify-center items-center">
    {#each frames as frame}
      <img
        id={frame.id}
        src={frame.src}
        alt={'frame-' + frame.id}
        class:frame={true}
        class:hidden={frame.hidden}
      />
    {/each}
  </div>
</main>
