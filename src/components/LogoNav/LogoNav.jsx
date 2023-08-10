import { useEffect, useState } from "react"
import styles from './LogoNav.module.css'

const LogoNav = () => {
    const dbLogoURL = "https://json-db-modulo-14.vercel.app/Logo"
    const navUlURL = "https://json-db-modulo-14.vercel.app/navUl"
    const [logo, setLogo] = useState([])
    const [navUlArr, setNavUlArr] = useState([])

    useEffect(() => {
        fetch(dbLogoURL)
        .then(res => res.json())
        .then(reJson => {
            console.log(reJson)
            setLogo(reJson)
        })
    }, [])

    useEffect(() => {
        fetch(navUlURL)
        .then(res => res.json())
        .then(reJson => {
            console.log(reJson)
            setNavUlArr(reJson)
        })
    }, [])


    return (
        <>
        <header id="cabecalho" className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <div className={styles.logotipo}>
                    <h1>Mus<span className={styles.logo_span}>!</span>c Store</h1>
                    {logo.map((logoArr => {
                        return (
                            <h5 key={logoArr.id} className="navbar-brand">{logoArr.slogan}</h5>
                        )
                    }))}
                </div>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu-navegacao">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <nav className="navbar-collapse collapse justify-content-center" id="menu-navegacao">
                    <ul className="nav nav-pills d-block d-md-flex">
                        {navUlArr.map((navUl) => {
                            return (
                                <li key={navUl.id} className={`nav-item fw-bold ${styles.navLi}`}>
                                    <a className={`nav-link ${styles.navLi_a}`} href={`#${navUl.href}`}>
                                        {navUl.nome}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </div>
        </header>
        </>
    )
}

export default LogoNav