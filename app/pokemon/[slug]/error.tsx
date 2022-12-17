"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function PokemonError({ error }: Props) {
  useEffect(() => {
    // Log the error to the console
    console.error(error);
  }, [error]);

  return (
    <>
      <p>{error.message}: Team Rocket&apos;s at it again!</p>
    </>
  );
}
