import 'src/app/globals.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main>
      <Link href="/cadastro" className='voltar'> CADASTRAR </Link>
      <div className="grid grid-cols-4 ml-28 mr-28 gap-4 mt-10">
        {produtos.map(produtos => (
          <div className="bg-slate-400 border w-full h-full border-blue-900 p-4 rounded">
            <div key={produtos.codigo}>
              <img src={produtos.imagem} className="w-32 h-32 object-cover mx-auto mb-4" />
              <p className="text-lg font-bold mb-2">{produtos.titulo}</p>
              <p className="mb-2">{produtos.descrição}</p>
              <p>{produtos.data_cadastro}</p>
              <Link href={`/produto/${produtos.id}`} className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ver mais</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}