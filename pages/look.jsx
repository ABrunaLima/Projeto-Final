import Head from 'next/head'
import Image from 'next/image'
import { Carrosel } from '../scr/components/carrossel'
import { NavBarSearch } from '../scr/components/navBarSearch'


export default function Look() {
    return (

        <div>
                <NavBarSearch />
            <div>
                <Carrosel />
            </div>
        </div>

    )
}