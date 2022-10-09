import styles from '/styles/navbar.module.css'
import { Login } from './login'
import { useRouter } from 'next/router'


export function NavBar() {
    const navItems = [
        {
            label: "Home",
            path: "../pages/index"
        },
        {
            label: "Closet",
            path: "../pages/closet"
        }
    ]


    return (
        <>
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
        </>
    )
}

function NavItem({ path, label }) {
    const router = useRouter
    return <span onClick={() => router.push(path)}>{label}</span>
}






































































































































































































































































































































































































