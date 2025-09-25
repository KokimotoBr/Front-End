//import Image from "next/image";
'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
 // let cont = 0;
const [cont, setCont] = useState(0)

  const subtrair = () => {
    setCont(cont - 1);
    console.log(cont);
  }

    const adicionar = () => {
      setCont(cont + 1);
      console.log(cont);
    }
  
  return (
    <div className= {styles.page}>
      <h1 className={styles.cu}>Amazonas o reino perdido</h1>
      <h2 className = {styles.uc}> A aventura do indio</h2>
      <p className={styles.cu}>Socorro, disse o negro</p>
      <button onClick={() => { adicionar () }}>Adicionar</button>
      <button onClick={() => { subtrair () }}>Subtrair</button>
      <p>Contagem {cont}</p>
      <img src="/favicon.ico"></img>
    </div>
  )
} ;