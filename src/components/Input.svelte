<script>
  export let name = 'World';
</script>

<div class="Input">
  <!-- Como se hace el binding -->
  <input type="text" bind:value={name} />
  <!-- Aqui simplemente se muestra el valor -->
  <p>Hello {name}!</p>
</div>
