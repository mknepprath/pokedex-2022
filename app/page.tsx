import Link from "next/link";

import { Inter } from "@next/font/google";

import styles from "./page.module.css";

interface Pokemon {
  name: string;
  url: string;
}

export default async function Home() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon");
  let data = await res.json();
  return (
    <main className={styles.main}>
      <ul>
        {data.results.map((pokemon: Pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
