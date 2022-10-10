import { useRouter } from 'next/router'
import styles from '../styles/Closet.module.css'
import { NavBar } from '../scr/components/navbar'

export default function closet() {


    //função que vai apresentar todos os looks guradados pelo utilizador
    //recebe a propriedade look, como sendo representante dos looks 
    // function showAllLooks(look) {



    // }

    // showAllLooks()


    return (
        <div>
            <NavBar />
            <div className={styles.closet}>
                <div className={styles.title} for="titulo-da-pagina">
                    <h2 className={styles.h2}>Closets</h2>
                </div>


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
            </div>
        </div>

    )

}