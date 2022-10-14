import Head from 'next/head'
import Image from 'next/image'
import { Carrosel } from '../scr/components/carrossel'
import { Filtro } from '../scr/components/filtros'
import { NavBarSearch } from '../scr/components/navBarSearch'
import styles from '../styles/lookPage.module.css'
import { Roupas } from '../scr/assets/roupas'
import { useState } from 'react'
import { Look } from './mycloset'

export default function LookPage() {
    const [roupaFiltrada, setRoupaFiltrada] = useState(Roupas)
    const [lookAtual, setLookAtual] = useState({})


    console.log(lookAtual)

    const saveLook = () => {
        fetch("/api/closet/:id/look", {
            method: "POST",
            headers: {
                "Content-Type": "app",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(lookAtual)

        })
    }

    const alterarLook = (item) => {
        setLookAtual(prevLook => ({ ...prevLook, [item.slot]: item }))
    }

    const removerLook = (top) => {
        setLookAtual(prevLook => ({ ...prevLook, [top.slot]: {} }))
    }


    function geraAleatorio() {
        const partesDeCima = Roupas.filter(r => r.slot === "top")
        const indiceRoupaCima = Math.floor(Math.random() * partesDeCima.length);

        const partesMeio = Roupas.filter(r => r.slot === "middle")
        const indiceRoupaMeio = Math.floor(Math.random() * partesMeio.length);

        const partesDeBaixo = Roupas.filter(r => r.slot === "bottom")
        const indiceRoupaBaixo = Math.floor(Math.random() * partesDeBaixo.length);

        setLookAtual(prevLook => ({
            "top": partesDeCima[indiceRoupaCima],
            "middle": partesMeio[indiceRoupaMeio],
            "bottom": partesDeBaixo[indiceRoupaBaixo]
        }));


    }



    return (
        <div className={styles.container}>
            <NavBarSearch />
            <div className={styles.linhaDoCarrossel}>
                <div className={styles.filtros}>
                    <Filtro
                        data={roupaFiltrada}
                        setData={setRoupaFiltrada} />
                </div>
                <div className={styles.look}>
                    <Look
                        onDelete={removerLook}
                        top={lookAtual.top}
                        middle={lookAtual.middle}
                        bottom={lookAtual.bottom}
                    />
                    <span className={styles.mais}>
                        <button onClick={(e) => saveLook()}><img src='/images/plus.png' /></button>
                        <button onClick={geraAleatorio}><img src='/images/aleatorio.png' /></button>
                    </span>
                </div>
                <div className={styles.carrossel}>
                    <Carrosel
                        data={roupaFiltrada}
                        onEscolherLook={alterarLook} />
                </div>
            </div>
        </div >

    )
}