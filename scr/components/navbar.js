import styles from '/styles/navbar.module.css'
import { Login } from './buttons/login'
import { useRouter } from 'next/router'
import closet from '../../pages/closet'


export function NavBar() {
    const navItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Closet",
            path: "/closet"                 //editado, testes de caminho        Daniel
        }
    ]

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.marca}>
                    <img src="/images/LogoPreto.png" />
                </div>
                <div className={styles.textos}>
                    {
                        navItems.map(n => <NavItem {...n} />)
                    }
                    <Login />
                </div>
            </nav>
        </div>
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