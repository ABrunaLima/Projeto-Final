import styles from '/styles/navbar.module.css'
import { Login } from './buttons/login'
import { useRouter } from 'next/router'



export function NavBarCloset() {
    const navItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Look",
            path: "/lookPage"                 //editado, testes de caminho        Daniel
        }
    ]


    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.marca}>
                    <img src="/images/LogoPreto.png" />
                </div>

                <div className={styles.searchBar}>
                    <div className={styles.search}>
                        <div><img src='/lupa.png' /></div>
                        <input type="text" placeholder="Search..." />


                    </div>
                </div>
                <div className={styles.textos}>
                    {
                        navItems.map(n => <NavItem key={n.label} {...n} />)
                    }
                    <Login />
                </div>
            </nav>
        </>
    )
}

function NavItem({ path, label }) {

    const router = useRouter()

    const handleClick = (e) => {

        e.preventDefault()
        router.push(path)

    }

    return (

        //o href, busca o caminho da página que é selecionado com o onClick quando se carrega numa das labels(botões) 
        <span href={path} onClick={handleClick}>
            {label}
        </span>

    )
}