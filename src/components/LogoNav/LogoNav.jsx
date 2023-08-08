import { useEffect, useState } from "react"
import styles from './LogoNav.module.css'

const LogoNav = () => {
    const dbLogoURL = "https://json-db-modulo-14.vercel.app/Logo"
    const [logo, setLogo] = useState([])

    useEffect(() => {
        fetch(dbLogoURL)
        .then(res => res.json())
        .then(reJson => {
            console.log(reJson)
            setLogo(reJson)
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

            </div>
        </header>
        </>
    )
}

export default LogoNav