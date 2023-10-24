import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
    <header className="bg-gray-800 text-white ">
      
          <nav className='flex justify-around items-center h-16'>
            <Link className='linkCabecalho' href="/item/camisa">Camisa</Link>
            <Link className='linkCabecalho' href="/item/calca">Calca</Link>
            <Link className='linkCabecalho' href="/item/sapato">Sapato</Link>
            <Link className='linkCabecalho' href="/item/oculos">Oculos</Link>
            <Link className='linkCabecalho' href="/item/bone">Bone</Link>

          </nav>
        </header>
  )
}
