<script>
  export let contador;
  export let texto;
</script>

<button on:click>
  {texto}
  {contador === 0 ? '' : contador}
</button>
