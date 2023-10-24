import React from 'react' 
import Image from "next/image";

export default function Camisa({params}) {
  return (
    <div className='bg'>
        <figure className='flex flex-col items-center justify-center' >
            <Image src={`/img/${params.armario}.jpg`} alt="Armario" width={320} height={320}></Image>
            <h1 className='text-2xl font-bold'>{params.armario}</h1>
        </figure>
    </div>
  )
}
