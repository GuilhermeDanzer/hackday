import { GetStaticProps } from "next";
import React, { useState } from "react";
import Link from "next/link";
export default function Home({ org }) {
  return (
    <div>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>

      <p>
        Site: <a href={org.blog}>{org.blog}</a>
      </p>
      <Link href="/pagina">Ir para pagina estatica</Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/orgs/hackday-imed");
  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10,
  };
};
