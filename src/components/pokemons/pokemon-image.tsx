import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface PokemonImageProps {
    id: number;
    size?: number;
    isBack: boolean;
    isDark: boolean;
}

export const PokemonImage = component$<PokemonImageProps>(({ id, size = 200, isBack, isDark }) => {
    const imageLoaded = useSignal(false);
    useTask$(({ track }) => {
      track(() => id);

      imageLoaded.value=false
      
    });
    
    
    return (<div class="flex items-center justify-center" style={{ width: `${size}px`, height: `${size}px` }}>
        <span class={{
                'hidden': imageLoaded.value
            }}>Cargando...</span>
        <img
            src={
                isBack
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
            alt="Pokemon Sprite"
            width={`${size}px`}
            height={`${size}px`}
            onLoad$={ () => {
                setTimeout(() => {
                    imageLoaded.value = true
                }, 100);
            }}
            class={{
                'hidden': !imageLoaded.value,
                'brightness-0': isDark,
            }}
        />
    </div>)
});