import 'src/app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const req = await fetch(
    'https://projeto-interdisciplinar-gamma.vercel.app/produtos',
    {
      cache: 'no-cache',
    }
  );
  const produtos = await req.json();

  return (
    <main>
      <nav class="bg-[#111827] border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <Image
              width={300}
              height={300}
              src="https://img.icons8.com/?size=512&id=sXHXa8UD0TX4&format=png"
              class="h-8 mr-3"
              alt="Geekstore Logo"
            />
            <span class="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Geekstore
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <a
                  href="/"
                  class="text-white block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Produtos
                </a>
              </li>

              <li>
                <a
                  href="/cadastro"
                  class="text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Cadastro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-4 ml-28 mr-28 gap-4 mt-10">
        {produtos.map((produtos) => (
          <div key={produtos.codigo} className="bg-[#111827] border w-full h-full border-blue-900 p-4 rounded">
            <div>
              <Image
                width={300}
                height={300}
                src={produtos.imagem}
                className="w-32 h-32 object-cover mx-auto mb-4"
              />
              <p className="text-lg font-bold mb-2 text-white">
                {produtos.titulo}
              </p>
              <p className="mb-2 text-gray-300">{produtos.descricao}</p>
              <p className="mb-2 text-gray-300">{produtos.data_cadastro}</p>

              <Link
                href={`/produto/${produtos.codigo}`}
                className="inline-block mt-2 bg-[#152848] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-4"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
