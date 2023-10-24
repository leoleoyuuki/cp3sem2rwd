import React from 'react'
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <p>Desculpa a pagina não foi encontrada</p>
        <figure>
          <Image src="/img/erro.jpg" alt="Armario" width={320} height={320}></Image>
        </figure>
    </div>
  )
}
