<script lang="ts">
  import GitHub from './assets/github.svg?component';
  import Frame from './lib/Frame.svelte';
  import { GameState } from './types';

  let gameState: GameState = GameState.StartScreen;

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
  $: timeToWinFormatted =
    gameState === GameState.WinA || gameState === GameState.WinB
      ? Math.trunc(timeToWin).toString().padStart(3, '0')
      : '...';

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
    <div class="absolute font-bold text-2xl right-[90px] bottom-[225px] h-12 w-12 text-center">
      {timeToWinFormatted}
    </div>
  {/if}

  <Frame {gameState} />
</main>

<a
  href="https://github.com/julesrx/kirby-samurai"
  target="_blank"
  rel="nofollow"
  class="fixed bottom-2 right-2 text-white opacity-10"
>
  <GitHub />
</a>
