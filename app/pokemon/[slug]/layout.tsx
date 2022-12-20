interface Props {
  children: React.ReactNode;
}

export default async function PokemonLayout({ children }: Props) {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  let data = await res.json();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10rem lfr",
        padding: "2rem",
      }}
    >
      <aside>
        <ul>
          {data.results.map((pokemon: Pokemon) => (
            <li key={pokemon.name}>
              {" "}
              <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
            </li>
          ))}{" "}
        </ul>
      </aside>
      {children}
    </div>
  );
}
