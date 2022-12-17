import { notFound } from "next/navigation";

import { Props, fetchPokemonByName } from "./page";

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
