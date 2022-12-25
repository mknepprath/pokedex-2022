import Image from "next/image";
import { notFound } from "next/navigation";

import styles from "./pokemon.module.css";

async function fetchPokemonByName(name?: string): Promise<Pokemon | null> {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await res.json();
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

interface Props {
  params?: { slug: string };
}

export default async function PokemonPage({ params }: Props) {
  let pokemon = await fetchPokemonByName(params?.slug);
  if (!pokemon) return notFound();

  return (
    <div className={styles.header}>
      <h1 className={styles.headerName}>{pokemon.name}</h1>
      <p className={styles.headerTypeContainer}>
        Height: {pokemon.height}&quot;
      </p>
      <p className={styles.headerTypeContainer}>Weight: {pokemon.weight} lbs</p>
      <Image
        alt={`#${pokemon.order}`}
        height={128}
        src={pokemon.sprites.front_default}
        width={128}
      />
    </div>
  );
}
