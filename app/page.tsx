// import Link from "next/link";
import { redirect } from "next/navigation";

// import styles from "./page.module.css";

// import { Inter } from "@next/font/google";

interface Pokemon {
  name: string;
  url: string;
}

export default async function Home() {
  redirect(`/pokemon/bulbasaur`);
  // let res = await fetch("https://pokeapi.co/api/v2/pokemon");
  // let data = await res.json();
  // return (
  //   <main className={styles.main}>
  //     <ul>
  //       {data.results.map((pokemon: Pokemon) => (
  //         <li key={pokemon.name}>
  //           <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </main>
  // );
}
