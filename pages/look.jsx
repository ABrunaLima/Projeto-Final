import Head from 'next/head'
import Image from 'next/image'
import { Carrosel } from '../scr/components/carrossel'
import { NavBarSearch } from '../scr/components/navBarSearch'
import styles from '../styles/lookPage.module.css'

export default function Look() {
    return (

        <div>
                <NavBarSearch />
            <div className={styles.linhaDoCarrossel}>
                <div />
                <div />
                <Carrosel />
            </div>
        </div>

    )
}