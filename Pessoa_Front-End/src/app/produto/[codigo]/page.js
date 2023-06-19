'use client'
import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo = {codigo: parseInt(params.codigo)};
    const codigoJson = JSON.stringify(codigo);

    const req = await fetch("http://localhost:3003/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: codigoJson
    })
    const produto = await req.json();


    const remover = async () => {
        const codigoJson = JSON.stringify({ codigo: params.codigo });
        try {
            fetch("http://localhost:3003/produtos" , {
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
        <div>
            <p>{produto.titulo}</p>
            <p>{produto.data_cadastro}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>{produto.imagem}</p>
            <button onClick={remover}>REMOVER</button>
        </div>
        </main>
    );
}