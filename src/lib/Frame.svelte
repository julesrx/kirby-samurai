<script lang="ts">
  import { GameState } from '../types';
  import ifs from '../assets/start.png';
  import if1 from '../assets/frame1.png';
  import if2 from '../assets/frame2.png';
  import if3a from '../assets/frame3a.png';
  import if3b from '../assets/frame3b.png';

  export let gameState: GameState;
</script>

<img
  src={ifs}
  class="frame"
  class:hidden={gameState !== GameState.StartScreen}
  alt="frame"
/>
<img
  src={if1}
  class="frame"
  class:hidden={gameState !== GameState.BeforeChallenge}
  alt="frame"
/>
<img
  src={if2}
  class="frame"
  class:hidden={gameState !== GameState.Challenge}
  alt="frame"
/>
<img
  src={if3a}
  class="frame"
  class:hidden={gameState !== GameState.WinA}
  alt="frame"
/>
<img
  src={if3b}
  class="frame"
  class:hidden={gameState !== GameState.WinB}
  alt="frame"
/>
