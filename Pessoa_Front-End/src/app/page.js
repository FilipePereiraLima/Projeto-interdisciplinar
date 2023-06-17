"use client"
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main>
      <Link href="/cadastro" className={styles.voltar}>
        CADASTRAR
      </Link>
      <div className={`${styles.grid} ${styles.productGrid}`}>
        {produtos.map((produto) => (
          <div className={`${styles.productCard} bg-slate-400 border border-blue-900`} key={produto.codigo}>
            <img src={produto.imagem} className={styles.productImage} />
            <p className={styles.productTitle}>{produto.titulo}</p>
            <p className={styles.productDescription}>{produto.descrição}</p>
            <p className={styles.productDate}>{produto.data_cadastro}</p>
            <Link href={`/produto/${produto.id}`} className={styles.productLink}>
              ver mais
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}