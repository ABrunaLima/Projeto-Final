import { useRouter } from 'next/router'
import styles from '../styles/Closet.module.css'

export default function closet() {


    //função que vai apresentar todos os looks guradados pelo utilizador
    //recebe a propriedade look, como sendo representante dos looks 
    function showAllLooks(look) {



    }

    showAllLooks()
    return (

        <div className={styles.closet}>

            <div className={styles.title} for="titulo-da-pagina">
                <h2 className={styles.h2}>Closets</h2>
            </div>


            <section for="area-do-look">
                <div className={styles.lookEachArea}>
                    <div className={styles.area}><p>1</p></div>
                    <div className={styles.area}><p>1</p></div>
                    <div className={styles.area}><p>1</p></div>
                </div>

                <div className={styles.lookEachArea}>
                    <div className={styles.area}><p>1</p></div>
                    <div className={styles.area}><p>1</p></div>
                    <div className={styles.area}><p>1</p></div>
                </div>

            </section>
        </div>

    )

    // function NavBarCloset() {

    //     const navItemsCloset = [
    //         {
    //             label: "Home",
    //             path: "../pages/index"
    //         }
    //     ]

    //     return (
    //         <>
    //             <nav className={styles.nav}>
    //                 <div className={styles.marca}>
    //                     <img src="/images/LogoPreto.png" />
    //                 </div>
    //                 <div className={styles.textos}>
    //                     {
    //                         navItems.map(n => <NavItem {...n} />)
    //                     }
    //                     <Login />
    //                 </div>
    //             </nav>
    //         </>
    //     )

    // }


    // function NavItemCloset({ path, label }) {

    //     const router = useRouter()

    //     const handleClick = (e) => {

    //         e.preventDefault()
    //         router.push(path)

    //     }

    //     return (

    //         //o href, busca o caminho da página que é selecionado com o onClick quando se carrega numa das labels(botões) 
    //         <span href={path} onClick={handleClick}>
    //             {label}
    //         </span>

    //     )
    // }


}