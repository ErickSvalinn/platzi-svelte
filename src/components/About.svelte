<script lang="ts">
  import Button from './Button.svelte';

  // Logica de TypeScript
  let someText = `Frontend Developer at Platzi`;
  let contador = 0;
  let estilos = { modoOscuro: false };

  function aumentarContador() {
    contador += 1;
  }

  function cambiarModo() {
    estilos.modoOscuro = !estilos.modoOscuro;
    window.document.body.classList.toggle('modo-oscuro');
  }
</script>

<div class="About">
  <!-- Condición IF en Svelte -->
  {#if !estilos.modoOscuro}
    <p>{someText}</p>
  {:else}
    <p><span>Hello Modo Oscuro</span></p>
  {/if}

  <p>{someText}</p>

  <!-- En este caso es solo un elemento con su propia logica -->
  <Button on:click={aumentarContador} texto="Click" {contador} />
  <Button on:click={cambiarModo} texto="Modo oscuro" contador={0} />

  <!-- Deprecamos tambien este boton y reutilizamos esto -->
  <!-- <button on:click={cambiarModo}>Modo oscuro</button> -->
</div>

<style>
  /* Estilos */
  p {
    color: var(--theme-color);
  }
</style>
