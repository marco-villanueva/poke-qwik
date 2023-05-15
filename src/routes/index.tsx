import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';

export default component$(() => {

  const pokemonId = useSignal<number>(1);
  const isBack = useSignal<boolean>(false);
  const isDark = useSignal<boolean>(false);

  const handleToggleBack = $(() => isBack.value = !isBack.value)
  const handleToggleDark = $(() => isDark.value = !isDark.value)

  const handleIncrement = $(() => {
    pokemonId.value = Math.min(pokemonId.value + 1, 151);
  })

  const handleDecrement = $(() => {
    pokemonId.value = Math.max(pokemonId.value - 1, 1);
  })

  return (
    <>
      <span class="text-2xl">Buscador Simple</span>
      <span class="text-4xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} isBack={isBack.value} isDark={isDark.value}/>

      <div class="mt-2">
        <button onClick$={handleDecrement} class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={handleIncrement} class="btn btn-primary mr-2">Siguiente</button>
        <button onClick$={handleToggleBack} class="btn btn-primary mr-2">{isBack.value ? 'Front' : 'Back'}</button>
        <button onClick$={handleToggleDark} class="btn btn-primary mr-2">{isDark.value ? 'Revelar' : 'Ocultar'}</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Poke-Qwik',
  meta: [
    {
      name: 'description',
      content: 'My firts application on Qwik',
    },
  ],
};
