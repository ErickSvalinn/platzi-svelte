<script>
  let habilidades = [
    { id: 1, nombre: 'HTML' },
    { id: 2, nombre: 'CSS' },
    { id: 3, nombre: 'Javascript' },
  ];
</script>

<div class="Skills">
  <h3>Habilidades</h3>
  <ul>
    <!-- Con destructuración -->
    {#each habilidades as { nombre }, i}
      <li>{nombre}</li>
    {/each}
  </ul>
  <!-- Sin destructuración, usar cuando sean mas de 3 elementos destructurados -->
  <!-- {#each habilidades as habilidad, i}
    <li>{habilidad.nombre}</li>
  {/each} -->
</div>

<style>
  .Skills {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline;
    margin: 0 0 0 0.4em;
  }
</style>
