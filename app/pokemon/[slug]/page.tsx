import Image from "next/image";
import { notFound } from "next/navigation";

interface Pokemon {
  abilities: unknown[];
  base_experience: number;
  forms: unknown[];
  game_indices: unknown[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: unknown[];
  name: string;
  order: number;
  past_types: unknown[];
  species: unknown;
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: unknown[];
  types: unknown[];
  weight: number;
}

export async function fetchPokemonByName(
  name?: string
): Promise<Pokemon | null> {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await res.json();
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export interface Props {
  params?: { slug: string };
}

export default async function PokemonPage({ params }: Props) {
  let pokemon = await fetchPokemonByName(params?.slug);
  if (!pokemon) return notFound();

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Height: {pokemon.height}&quot;</p>
      <p>Weight: {pokemon.weight} lbs</p>
      <Image
        alt={`#${pokemon.order}`}
        height={128}
        src={pokemon.sprites.front_default}
        width={128}
      />
    </div>
  );
}
