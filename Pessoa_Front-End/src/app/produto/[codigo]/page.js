'use client'
import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
  

    const req = await fetch("http://localhost:3003/produtos" + params.codigo, {
        method: "GET",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
    })
    const res = await req.json();
    const produtos = res[0];


    const remover = async () => {
        const codigoJson = JSON.stringify({ codigo: params.codigo });
        try {
            await fetch(`http://localhost:3003/produtos/${params.codigo}`, {
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
        <div>
            <p>{produtos.titulo}</p>
            <p>{produtos.descricao}</p>
            <p>{produtos.imagem}</p>
            <button onClick={remover}>REMOVER</button>
        </div>
    );
}