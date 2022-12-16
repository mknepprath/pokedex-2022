import Image from "next/image";

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

interface Props {
  params?: { slug: string };
}

export default async function PokemonPage({ params }: Props) {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.slug}`);
  let data: Pokemon = await res.json();
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Height: {data.height}&quot;</p>
      <p>Weight: {data.weight} lbs</p>
      <Image
        alt={`#${data.order}`}
        height={128}
        src={data.sprites.front_default}
        width={128}
      />
    </div>
  );
}
