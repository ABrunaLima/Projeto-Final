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
                </div>
            </div>
        </div>
    )
}