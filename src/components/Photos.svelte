<script>
  import { onMount } from 'svelte';

  let fotos = [];

  onMount(async () => {
    console.log('OnMount');
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
    fotos = await respuesta.json();
  });
</script>

<div class="Photos">
  {#each fotos as foto}
    <figure>
      <img src={foto.thumbnailUrl} alt={foto.title} />
      <figcaption>{foto.title}</figcaption>
    </figure>
  {:else}
    <!-- Esta parte esta interesante, se puede poner algo mientras esta cargando, de forma automatica -->
    <p>Cargando...</p>
  {/each}
</div>

<style>
  .Photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
</style>
