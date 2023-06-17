"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>
<div className="grid grid-cols-4 ml-28 mr-28 gap-4 mt-10 ">
      {produtos.map(produtos => (
       <div className="bg-slate-400 border w-full  h-full border-blue-900"> 
        <div key={produtos.codigo}>
        <img src={produtos.imagem} style={{ width: '150px', height: '150px' }}/>
        <p>{produtos.titulo}</p>
        <p>{produtos.descrição}</p>
        <p>{produtos.data_cadastro}</p>
          <Link href={`/produto/${produtos.id}`}>ver mais</Link>
        </div>
        </div>
      ))}
      </div>
    </main>
  )
}