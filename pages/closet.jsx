import { useRouter } from 'next/router'
import styles from '../styles/Closet.module.css'
import { NavBar } from '../scr/components/navbar'

//teste PILOTO
const closets = [
    {
        id: "1",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 1"
    },
    {
        id: "2",
        imagePath: "camisaSocialpreta.png",
        title: "Closet 2"
    },
    {
        id: "3",
        imagePath: "armadura.png",
        title: "Closet 3"
    },
    {
        id: "4",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 4"
    },
    {
        id: "5",
        imagePath: "camisaSocialpreta.png",
        title: "Closet 5"
    }
]

export default function closet() {

    function getClosets(id, imagePath, title) {

        closets.map(getClosets)
        console.log("hello")

    }


    return (
        //**************************************************************************************************************
        <div>
            <div className={styles.fundoCloset}>
                <div>
                    <NavBar />
                </div>

                <div>
                    <div className={styles.closet}>
                        <div className={styles.title}>
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

                        <section>

                            <div className={styles.lookEachArea}>

                                <div className={styles.area}>

                                    <div className={styles.imagem}>
                                        <img src="camisaDoFlamengo.png" />
                                    </div>

                                </div>

                                <div className={styles.area}>

                                    <div className={styles.imagem}>
                                        <img src="camisaSocialPreta.png" />
                                    </div>

                                </div>

                                <div className={styles.area}>

                                    <div className={styles.imagem}>
                                        <img src="armadura.png" />
                                    </div>

                                </div>

                            </div>

                            {/* ------------------------------------------------------------------------------------------------ */}

                            <div className={styles.lookEachArea}>

                                <div className={styles.area}>

                                    <div className={styles.imagem}>
                                        <title>Closet Qualquer Coisa</title>
                                        <img src="armadura.png" />

                                    </div>



                                </div>

                                <div className={styles.area}>

                                    <div className={styles.imagem}>
                                        <img src="armadura.png" />
                                    </div>

                                </div>
                                <div className={styles.area}>

                                    <div className={styles.imagem}>
                                        <img src="armadura.png" />
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* ------------------------------------------------------------------------------------------------ */}
                    </div>
                </div>
            </div>
        </div>

    )

}