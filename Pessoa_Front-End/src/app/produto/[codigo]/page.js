'use client'
import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo = {codigo: parseInt(params.codigo)};
    const codigoJson = JSON.stringify(codigo);

    const req = await fetch("https://projeto-interdisciplinar-gamma.vercel.app/produto", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: codigoJson
    })
    const produto = await req.json();


    
    const remover = async () => {
        const codigoJson = JSON.stringify({ codigo: params.codigo });
        try {
            fetch("https://projeto-interdisciplinar-gamma.vercel.app/produtos" , {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: codigoJson
            });
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro: " + error);
        }
    };

    return (
      <main>
      <nav className="bg-[#111827] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="https://img.icons8.com/?size=512&id=sXHXa8UD0TX4&format=png" className="h-8 mr-3" alt="Geekstore Logo" />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Geekstore</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="/" className="text-white block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Produtos</a>
              </li>
              <li>
                <a href="/cadastro" className="text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Cadastro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center mt-8">
        <img src={produto.imagem} className="w-80 h-80" alt="Imagem do produto" />
        <h2 className="text-2xl font-bold mt-4">{produto.titulo}</h2>
        <p className="text-gray-500 mt-2">{produto.descricao}</p>
        <p className="text-gray-500 font-bold mt-2">Valor: R${produto.preco}</p>
        <p className="text-gray-500 mt-2">{produto.data_cadastro}</p>
        <button
          onClick={remover}
          className="mt-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none"
        >
          REMOVER
        </button>
      </div>
    </main>
  );
}