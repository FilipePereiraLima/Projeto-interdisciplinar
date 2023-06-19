'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter('');
    
    const [titulo, setTitulo] = useState('');
    const [datadecadastro, setDatadecadastro] = useState('');

    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    const [imagem, setImagem] = useState('');

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produtos = {
            titulo: titulo,
            data_cadastro: datadecadastro,
            preco: preco,
            descrição: descricao,
            imagem: imagem
        }
        alert('foi cadastrado com sucesso')

        const produtoJson = JSON.stringify(produtos);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <main>
<nav class="bg-white border-gray-200 dark:bg-gray-900">

  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a href="#" class="flex items-center">

        <img src="https://img.icons8.com/?size=512&id=sXHXa8UD0TX4&format=png" class="h-8 mr-3" alt="Geekstore Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Geekstore</span>

    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
     
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Produtos</a>
        </li>
        
        <li>
          <a href="/cadastro" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Cadastro</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <div className={"flex flex-col justify-center items-center mt-40"}>
            <h1 className="flex flex-col justify-center items-center text-3xl font-bold mb-4 ">Cadastrar Produto</h1>
           
            <form  onSubmit={cadastrar}>

                <input
                    className="text-lg mb-2 border w-full h-full border-blue-900 p-4 rounded w-80"
                    type="text"
<<<<<<< HEAD
                    placeholder='insira o titulo do produto:'
                    id="titulo"
                    value={titulo}
=======
                    placeholder='Insira o titulo do produto:'
                    Titulo="Titulo"
>>>>>>> 83b52c1d78438d422d8613fa686f29c80006d094
                    onChange={e => setTitulo(e.target.value)}
                /><br/>

                <input
                    className="text-lg  mb-2 border w-full h-full border-blue-900 p-4 rounded w-80"
                    type="date"
<<<<<<< HEAD
                    placeholder='insira a data de cadastro do produto:'
                    id="data_cadastro"
                    value={datadecadastro}
=======
                    placeholder='Insira a data de cadastro do produto:'
                    Titulo="Datadecadastro"
>>>>>>> 83b52c1d78438d422d8613fa686f29c80006d094
                    onChange={e => setDatadecadastro(e.target.value)}
                /><br/>

                <input
                    className="text-lg mb-2 border w-full h-full border-blue-900 p-4 rounded w-80"
                    type="integer"
                    placeholder='Insira o preço do produto:'
                    id="preco"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                /><br/>

                <input
                    className="text-lg mb-2 border w-full h-full border-blue-900 p-4 rounded w-80"
                    type="text"
                    placeholder='Insira a descriçao do produto:'
                    id="descrição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                /><br/>

                <input
                    className="text-lg mb-2 border w-full h-full border-blue-900 p-4 rounded w-80"
                    type="text"
                    placeholder='Insira a imagem do produto:'
                    id="imagem"
                    value={imagem}
                    onChange={e => setImagem(e.target.value)}
                /><br/>
                <button className="text-lg mb-2 border border-blue-900 p-4 rounded w-36 mx-2" type='submit'>Cadastrar</button>
                
                    <button className="text-lg mb-2 border border-blue-900 p-4 rounded w-36 mx-2"><a href='/'>Voltar</a></button>
                
            </form>
        </div>
        </main>
    );
}