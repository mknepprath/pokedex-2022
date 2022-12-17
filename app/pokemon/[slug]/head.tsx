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

export default async function PokemonHead({ params }: Props) {
  let pokemon = await fetchPokemonByName(params?.slug);
  if (!pokemon) return null;

  return (
    <>
      <title>
        #{pokemon.id}: {pokemon.name}
      </title>
      <meta
        name="description"
        content={`${pokemon.name} is a Pokemon with a height of ${pokemon.height} inches and a weight of ${pokemon.weight} pounds.`}
      />
    </>
  );
}
