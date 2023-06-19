'use client'

import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();

    const req = await fetch("http://localhost:3003/produtos", + params.codigo, {
        method: "GET",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
    })
    const res = await req.json();
    const produtos = res[0];


    const remover = () => {
        const codigoJson= JSON.stringify({codigo: produtos.codigo})
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: codigoJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }


    return (
        <div>
            <p>{produto.nome}</p>
            <p>{produto.idade}</p>
            <p>{produto.uf}</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}