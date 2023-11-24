<script lang="ts">
  import fs from './assets/start.png';
  import f1 from './assets/frame1.png';
  import f2 from './assets/frame2.png';
  import f3a from './assets/frame3a.png';
  import f3b from './assets/frame3b.png';
</script>

<main>
  <div id="app" class="h-screen flex justify-center items-center">
    <img id="f-s" src={fs} alt="frame" class="frame" />
    <img id="f-1" src={f1} alt="frame" class="frame hidden" />
    <img id="f-2" src={f2} alt="frame" class="frame hidden" />
    <img id="f-3a" src={f3a} alt="frame" class="frame hidden" />
    <img id="f-3b" src={f3b} alt="frame" class="frame hidden" />
  </div>
</main>
