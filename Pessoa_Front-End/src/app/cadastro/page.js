'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    
    const [Titulo, setTitulo] = useState();
    const [Datadecadastro, setDatadecadastro] = useState();

    const [Preco, setPreco] = useState();
    const [Descricao, setDescricao] = useState();

    const [Imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            Titulo: Titulo,
            Datadecadastro: Datadecadastro,
            Preco: Preco,
            Descricao: Descricao,
            Imagem: Imagem
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='insira o titulo do produto:'
                    Titulo="Titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="date"
                    placeholder='insira a data de cadastro do produto:'
                    Titulo="Datadecadastro"
                    onChange={e => setDatadecadastro(e.target.value)}
                /><br/>
                <input
                    type="integer"
                    placeholder='Insira o preço do produto:'
                    Titulo="Preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Insira a descriçao do produto:'
                    Titulo="Descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Insira a imagem do produto:'
                    Titulo="Imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}