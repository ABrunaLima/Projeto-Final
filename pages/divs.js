import { NavBarSearch } from "../scr/components/navBarSearch"
import styles from "../styles/divs.module.css"
export default function BotoesClose() {

    return (
        <div className={styles.pagina}>
            <NavBarSearch />
            <div className={styles.container}>
                <div className={styles.borda}>
                    <div className={styles.botoes}>
                        <button>Look 1</button>
                        <button>Look 2</button>
                        <button>Look 3</button>
                        <button>Look 4</button>
                        <button>Look 5</button>
                        <button>Look 6</button>
                    </div>
                    <div style={{ height: "700px", width: "590px" }}>
                        <Look
                        //top={"id" = "6346a03aa06125c61f4a0a4a"} mid={"id" = "6346a03acc6f3ed8b024e223"} bottom={"id" = "6346a03a6cb094b8b89191f4"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Look() {
    return <div>
        <div className={styles.top}>
            <img src="/images/roupas/camisolaBege.png" />
        </div>
        <div className={styles.mid}>
            <img src="/images/roupas/calcasCinzaGanga.png" />
        </div>
        <div className={styles.bottom}>
            <img src="/images/roupas/tenisCreme.png" />
        </div>

    </div>
}