<script lang="ts">
  import GitHub from './assets/github.svg?component';
  import ifs from './assets/start.png';
  import if1 from './assets/frame1.png';
  import if2 from './assets/frame2.png';
  import if3a from './assets/frame3a.png';
  import if3b from './assets/frame3b.png';

  interface Frame {
    id: string;
    src: string;
  }

  enum GameState {
    StartScreen,
    BeforeChallenge,
    Challenge,
    WinA,
    WinB
  }

  // TODO: preload images to prevent loading

  const fs: Frame = { id: 'f-s', src: ifs };
  const f1: Frame = { id: 'f-1', src: if1 };
  const f2: Frame = { id: 'f-2', src: if2 };
  const f3a: Frame = { id: 'f-3a', src: if3a };
  const f3b: Frame = { id: 'f-3b', src: if3b };

  let gameState: GameState = GameState.StartScreen;
  $: currentFrame = getCurrentFrame(gameState);

  const getCurrentFrame = (gameState: GameState) => {
    switch (gameState) {
      case GameState.StartScreen:
      default:
        return fs;

      case GameState.BeforeChallenge:
        return f1;

      case GameState.Challenge:
        return f2;

      case GameState.WinA:
        return f3a;

      case GameState.WinB:
        return f3b;
    }
  };

  // start the game
  document.addEventListener('keydown', (e) => {
    if (
      gameState !== GameState.StartScreen &&
      gameState !== GameState.WinA &&
      gameState !== GameState.WinB
    )
      return;
    if (e.code !== 'Space') return;

    prepareChallenge();
  });

  let timeToWin: number = 0;
  $: timeToWinFormatted = Math.trunc(timeToWin).toString().padStart(3, '0');

  let startTime: number | null = null;
  const prepareChallenge = () => {
    gameState = GameState.BeforeChallenge;
    timeToWin = 0;

    document.addEventListener('keydown', resolveChallenge);

    const delay = (Math.random() + 1) * 1000;
    setTimeout(challenge, delay);
  };

  const challenge = () => {
    gameState = GameState.Challenge;
    startTime = performance.now();
  };

  const resolveChallenge = (e: KeyboardEvent) => {
    if (gameState !== GameState.Challenge) return;
    if (e.code !== 'KeyQ' && e.code !== 'Slash') return;

    const endTime = performance.now();
    timeToWin = endTime - startTime!;

    if (e.code === 'KeyQ') gameState = GameState.WinA;
    else if (e.code === 'Slash') gameState = GameState.WinB;

    document.removeEventListener('keydown', resolveChallenge);
  };
</script>

<main class="relative">
  {#if gameState !== GameState.StartScreen}
    <div class="absolute font-bold text-2xl right-[95px] bottom-[240px]">
      {timeToWinFormatted}
    </div>
  {/if}

  <img
    id={currentFrame.id}
    src={currentFrame.src}
    alt={'frame-' + currentFrame.id}
    class="h-[800px]"
  />
</main>

<a
  href="https://github.com/julesrx/kirby-samurai"
  target="_blank"
  rel="nofollow"
  class="fixed bottom-0 right-0 text-white opacity-10"
>
  <GitHub />
</a>
