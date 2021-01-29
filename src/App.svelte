<script>
  // Importa componentes
  import About from './components/About.svelte';
  import Text from './components/Text.svelte';
  import Person from './components/Person.svelte';
  import Skills from './components/Skills.svelte';
  import Input from './components/Input.svelte';
  import Photos from './components/Photos.svelte';
  import ButtonCount from './components/ButtonCount.svelte';

  // Define variables
  export let name;
  export let lastName;
  let svelteLogo = 'https://arepa.s3.amazonaws.com/svelte-logo.png';

  // Creamos objeto para el componente persona
  const datos = {
    nombre: 'Oscar',
    apellido: 'Barajas',
    edad: 31,
  };
</script>

<main>
  <h1>Hello {name} {lastName}!</h1>

  <!-- Importar un componente -->
  <About />

  <!-- Envío de parámetros a través de componentes -->
  <Text otroTexto="Prueba de envio de parámetro externo" />

  <!-- Pasando valor por defecto -->
  <Text />

  <!-- Inclusion de valores por objeto uno a uno -->
  <Person nombre={datos.nombre} apellido={datos.apellido} edad={datos.edad} />

  <!-- Inclusión de valores por destructuración -->
  <Person {...datos} />

  <!-- Llamamos ejemplo de foreach -->
  <Skills />

  <!-- Ejemplo de binding -->
  <Input />

  <!-- Ejemplo de Store -->
  <ButtonCount />

  <!-- Ejemplo de ciclo de vida -->
  <Photos />

  <!-- Importar imagen desde ruta -->
  <img src={svelteLogo} alt="Logo Svelte" />
</main>

<style>
  /* Estilo que aplica sobre toda la aplicación, no solo este componente */
  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
  }

  /* Variables globales :global(:root)*/
  :global(:root) {
    --theme-color: rgb(126, 0, 126);
  }

  :global(body.modo-oscuro) {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
