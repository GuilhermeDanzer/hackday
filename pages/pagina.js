import { GetStaticProps } from "next";
import React, { useState } from "react";
import Link from "next/link";
export default function pagina() {
  return (
    <div>
      <h1>Sou uma pagina estatica</h1>
      <Link href="/">Voltar</Link>
    </div>
  );
}
