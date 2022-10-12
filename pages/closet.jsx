import { useRouter } from 'next/router'
import styles from '../styles/Closet.module.css'
import { NavBar } from '../scr/components/navbar'

import dropDownButton from '../scr/components/buttons/DropDownButton'
import DropDownButton from '../scr/components/buttons/DropDownButton'

export default function closet() {


    //função que vai apresentar todos os looks guradados pelo utilizador
    //recebe a propriedade look, como sendo representante dos looks 
    // function showAllLooks(look) {

    //escrever aqui

    // }

    // showAllLooks()


    return (
        //**************************************************************************************************************
        <div>
            <div className={styles.fundoCloset}>
                <div>
                    <NavBar />
                </div>

                <div>
                    <div className={styles.closet}>
                        <div className={styles.title} for="titulo-da-pagina">
                            <h2 className={styles.h2}>Closets</h2>
                        </div>
                        {/* <CDropdown /> */}

                        {/* ------------------------------------------------------------------------------------------------ */}

                        {/* <section for="botao-escolher-closet">
                    <div className={dropDownButton.dropdown}>
                        <button onClick={dropDownButton} className={styles2.dropbtn}>Escolher Closet</button>
                        <div id="myDropdown" className={styles2.dropdownContent}>
                            <a href="#closet1">Closet 1</a>
                            <a href="#closet2">Closet 2</a>
                            <a href="#closet3">Closet 3</a>
                        </div>
                    </div>
                </section> */}

                        {/* ------------------------------------------------------------------------------------------------ */}

                        <section for="area-do-look">
                            <div className={styles.lookEachArea}>
                                <div className={styles.area}></div>
                                <div className={styles.area}></div>
                                <div className={styles.area}></div>
                            </div>

                            <div className={styles.lookEachArea}>
                                <div className={styles.area}></div>
                                <div className={styles.area}></div>
                                <div className={styles.area}></div>
                            </div>
                        </section>

                        {/* ------------------------------------------------------------------------------------------------ */}
                    </div>
                </div>
            </div>
        </div>

    )

}