import { component$, Slot } from '@builder.io/qwik';
import { NavBar } from '~/components/shared/NavBar/NavBar';

export default component$(() => {
  return (<>
    <NavBar />
    <main class="flex flex-col items-center justify-center">
      <Slot />
    </main>
  </>);
});
