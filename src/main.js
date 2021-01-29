import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Erick',
    lastName: 'Navarro',
  },
});

export default app;
