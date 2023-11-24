/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*?component' {
  const m: Class;
  export default m;
}
