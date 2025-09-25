'use client';
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";
import Image from "next/image";


export default function Header() {
    const [show, setShow] = useState(false);
    const [icone, setIcone] = useState("/images/checked.png")
    
    const clique = () => {
        show? setIcone('/images/checked.png'): setIcone("/images/cross.png");
        setShow(!show);
    }

    return (
        <>
            <header className={styles.headerMobile}>
                <div onClick={() => { clique ()}}><Image src={icone} alt="Menu" width={30} height={30}></Image></div>
                {show &&
                <div style={{height: '200px', border: '2px solid black'}}>
               <p>Teste</p>
                </div>
                }
            </header>

        <header className={styles.header}>
            <nav>
                <ul className={styles.ulmenu}>
                    <li className={styles.limenu}><Link className={styles.link} href='/'>Home</Link></li>
                    <li className={styles.limenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                        <ul className={styles.ulsubmenu}>
                            <li className={styles.limenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link> </li>
                            <li className={styles.limenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
